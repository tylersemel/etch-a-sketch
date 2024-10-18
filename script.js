const INIT_GRID_SIZE = 16;
const container = document.querySelector(".container");
const SIZE = 480;
const btn = document.querySelector("button");
let gridSpaces = [];

function createGrid(gridSize) {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        let gridSpace = document.createElement("div");
        gridSpace.classList.add(`${i}`);
        let width = (SIZE / gridSize).toString();
        gridSpace.setAttribute("style", `width:${width}px`)
        gridSpaces[i - 1] = gridSpace;
        container.appendChild(gridSpace);
    }

    console.log("space: ", gridSpaces[0].style.width);

}
//711 729
createGrid(INIT_GRID_SIZE);

function getRandomColorVal() {
    let min = 0;
    let max = 255
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

container.addEventListener("mouseover", (e) => {
    let color = [getRandomColorVal(), getRandomColorVal(), getRandomColorVal()];
    e.target.style.backgroundColor = `rgb(${color})`;
});

btn.addEventListener("click", () => {
    console.log("test");
    let userGridSize = prompt("Enter a new grid size (Max 100)", 16);

    if (userGridSize < 1 || userGridSize > 100) {
        alert("Try again!");
        return;
    }

    for (let i = 0; i < gridSpaces.length; i++) {
        gridSpaces[i].remove();
    }

    createGrid(userGridSize);
});