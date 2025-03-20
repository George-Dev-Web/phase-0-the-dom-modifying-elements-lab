// Write your code here!
// Step 1: Remove the <main> element with id="main"
document.querySelector("main#main").remove();

// Step 2: Create a new <h1> element
const newHeader = document.createElement("h1");

// Step 3: Set the id of newHeader to "victory"
newHeader.id = "victory";

// Step 4: Set the text content of newHeader
newHeader.textContent = "Your-Name is the champion"; // Replace "Your-Name" with your actual name

// Step 5: Append newHeader to the body
document.body.appendChild(newHeader);
