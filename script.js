// navbar
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

let heartCountEl = 
   document.getElementById('heartCount');
let coinCountEl = 
   document.getElementById('coinCount');
let copyCountEl = 
    document.getElementById('copyCount');

      let historyList =
      document.getElementById ('historyList');
        let clearHistoryBtn =
        document.getElementById('clearHistory');




       let hearts = document.getElementsByClassName('fa-heart');
     
       for (let i = 0; i < hearts.length; i++) {
            hearts[i].onclick = function() {
             heartCount++;
            heartCountEl.innerHTML = heartCount;
                };
        }

let copyButtons =  
      document.getElementsByClassName('copy-btn');
        for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].onclick = function() {
    copyCount++;
    copyCountEl.innerHTML = copyCount;

    
    let number = this.getAttribute('data-number');

    // Copy to clipboard section
    let tempInput = document.createElement('input');
    tempInput.value = number;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    alert("Copied: " + number);
  };
}


     let callButtons =
          document.getElementsByClassName('call-btn');
        for (let i = 0; i < callButtons.length; i++) {
               callButtons[i].onclick = function() {
        let number = this.getAttribute('data-number');
           let name = this.getAttribute('data-name');

    if (coinCount < 20) {
      alert("You dont have enough coins! At least 20 coins are required to make a call.");
      return;
    }
         coinCount -= 20;
      coinCountEl.innerHTML = coinCount;

    alert("Calling " + name + " " + number);
    
  // time section
 let now = new Date();
  let hours = now.getHours();
   let minutes = now.getMinutes();
    let seconds = now.getSeconds();
      let ampm = hours >= 12 ? 'PM' : 'AM';
           hours = hours % 12;
      if (hours === 0) hours = 12; 
    let time = hours + ":" + minutes.toString().padStart(2,'0') + ":" + seconds.toString().padStart(2,'0') + " "+ ampm;
 
let record = document.createElement('div');
record.className = "border-b py-1"; 
record.innerHTML = `
     <div style =
             "display:flex;
             justify-content:space-between;">
        <b>${name}</b>
        <span>${time}</span>
        </div>
        <div> ${number}</div>
        `;
     


historyList.appendChild(record);
               };
            }

clearHistoryBtn.onclick = function() {
  historyList.innerHTML ="";
};
