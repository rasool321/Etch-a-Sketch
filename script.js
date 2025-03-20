let currentMode = "color";

document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);
});

function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';
    container.style.display = "grid";
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.opacity = "1";
        square.addEventListener("mouseenter", () => {
            if (currentMode === "color") {
                square.style.backgroundColor = getRandomColor();
            } else if (currentMode === "darken") {
                let currentOpacity = parseFloat(square.style.opacity);
                if (currentOpacity > 0) {
                    square.style.opacity = (currentOpacity - 0.1).toFixed(1);
                }
            } else if (currentMode === "eraser") {
                square.style.backgroundColor = "white";
                square.style.opacity = "1";
            }
        });
        container.appendChild(square);
    }
}
function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
document.getElementById("whitemode").addEventListener("click",() =>{
   document.body.classList.toggle("light-mode");
});
document.getElementById("darkmode").addEventListener("click",() =>{
    document.body.classList.toggle("dark-mode");
 });

document.getElementById("colormode").addEventListener("click", () => {
    currentMode = "color";
});

document.getElementById("erasermode").addEventListener("click", () => {
    currentMode = "eraser";
});

document.getElementById("reset").addEventListener("click", () => {
    createGrid(16);
});

document.getElementById("resize").addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter grid size (max 64):"));
    if (newSize > 0 && newSize <= 64) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 64.");
    }
});