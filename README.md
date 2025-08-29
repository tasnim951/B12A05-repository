# Question - 1.Difference between getElementById,getElementsByClassName and querySelector/querySelectorAll ?

# Ans:
getElementById = Finds one element by its id.
getElementsByClassName = Finds all elements with that class.
querySelector = finds the first matching element.
querySelectorAll = finds all matching elements.

# Question - 2.How to create and insert a new element into the DOM?
 
 # Ans:
 First we create an element using document.createElement().Then we can add text or attributes to it,like div.textContent = "Hello".Finally, we insert it into the page with appendChild() .

# Question - 3.What is event Bubbling and how does it work?
# Ans:
Event bubbling means an event starts from the element that was clicked(child) and then moves up to its parent, then grandparent ,and so on till the top of the DOM.
Example: If we click a button inside a div,first the button's event runs then the div's event,then body, then document.

# Question - 4.What is event delegation in JavaScript? Why is it useful?

# Ans: 
Event delegation means adding one event listener to a parent instead of every child.
It is useful because it saves memory and also works for new elements added later.

# Question - 5.What is difference between preventDefault() and stopPropagation()?

# Ans:
preventDefault() = stops the browser's default action,like stopping a link from opening.

stopPropagation() = stops the event from going up to parent elements.