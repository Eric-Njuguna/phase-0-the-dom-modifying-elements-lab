// Write your code here!


// Remove the <main> with id 'main'
const main = document.getElementById("main");
main.remove();

// Created an h1 element and assigned it to the variable newHeader then later given it an id of victory
const newHeader = document.createElement("h1");
newHeader.id = "victory";

// Added Yobra is the champion as the content of the our h1 element stored in the newHeader variable
newHeader.innerHTML = "Yobra is the champion";