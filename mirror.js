// Create an input field in your DOM. Give it an id of message.
// Create two article elements with unique id values. Use Flexbox to display them in a row, each taking 50% of the width of the browser.
// Give each article a different border color.
// Write an event listener that listens for the keyup event on the input field.
let writer = document.getElementById("message")

let mirror1 = document.getElementById("box1")
let mirror2 = document.getElementById("box2")


writer.addEventListener("keyup", (event) => {
    mirror1.innerHTML = event.target.value
    mirror2.innerHTML = event.target.value

})

// The event handler function should update the textContent property of both sections.