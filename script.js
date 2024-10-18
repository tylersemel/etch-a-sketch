const GRID_SIZE = 16;
const container = document.querySelector(".container");


function createGrid() {
    for (let i = 1; i <= GRID_SIZE * GRID_SIZE; i++) {
        let gridSpace = document.createElement("div");
        container.appendChild(gridSpace);
    }

}
//711 729
createGrid();