const INIT_GRID_SIZE = 16;
const container = document.querySelector(".container");
const SIZE = 480;

function createGrid(gridSize) {
    let gridSpaces = [];
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
    console.log("test", e.target);
    let color = [getRandomColorVal(), getRandomColorVal(), getRandomColorVal()];
    e.target.style.backgroundColor = `rgb(${color})`;
});
