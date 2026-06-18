const heading = document.getElementById('main-heading');
const paragraph = document.getElementById('description-text');
const inputField = document.getElementById('user-input');


document.getElementById('btn-change-text').addEventListener('click', function() {
    if (inputField.value !== "") {
        heading.innerText = inputField.value;
    } else {
        alert("Please enter text in the box first.");
    }
});


document.getElementById('btn-bg').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
});


let currentFontSize = 16;
document.getElementById('btn-font').addEventListener('click', function() {
    currentFontSize += 2;
    paragraph.style.fontSize = currentFontSize + "px";
});


document.getElementById('btn-toggle').addEventListener('click', function() {
    if (paragraph.style.display === "none") {
        paragraph.style.display = "block";
    } else {
        paragraph.style.display = "none";
    }
});


document.getElementById('btn-reset').addEventListener('click', function() {
    heading.innerText = "Welcome to JavaScript Lab";
    paragraph.style.display = "block";
    paragraph.style.fontSize = "16px";
    currentFontSize = 16;
    document.body.style.backgroundColor = "#f0f0f0";
    inputField.value = "";
});