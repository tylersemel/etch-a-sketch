const INIT_GRID_SIZE = 16;
const container = document.querySelector(".container");
const SIZE = 480;
const btn = document.querySelector("button");
let gridSpaces = [];

function createGrid(gridSize) {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        //create the space first with the black color, so
        //that when the new div is placed on top it covers it
        //then when repeatedly hovering the opacity on the inner div
        //gets lower, therefore the color gets darker
        let gridSpace = document.createElement("div");
        gridSpace.classList.add(`${i}`);
        let width = (SIZE / gridSize).toString();
        gridSpace.setAttribute("style", `width:${width}px`);
        gridSpace.style.backgroundColor = "black";

        let colorDiv = document.createElement("div");
        colorDiv.setAttribute("style", `width:${width}px`);
        colorDiv.setAttribute("style", `height:${width}px`);
        gridSpace.appendChild(colorDiv);

        gridSpaces[i - 1] = gridSpace;
        container.appendChild(gridSpace);
    }
}

function getRandomColorVal() {
    let min = 0;
    let max = 255
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let color = [getRandomColorVal(), getRandomColorVal(), getRandomColorVal()];
let opacityMulitplier = 0.1;

container.addEventListener("mouseenter", () => {
    color = [getRandomColorVal(), getRandomColorVal(), getRandomColorVal()];
});

container.addEventListener("mouseover", (e) => {
    if (!e.target.style.backgroundColor ||  `rgb(${color[0]}, ${color[1]}, ${color[2]})` !== e.target.style.backgroundColor) {
        e.target.style.backgroundColor = `rgb(${color})`;
        e.target.style.opacity = 1; 
    }
    else {
        if (e.target.style.opacity > 0) {
            let opacity = (e.target.style.opacity * 10 - opacityMulitplier * 10) / 10;
            e.target.style.opacity = `${opacity}`;
        }
    }
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

createGrid(INIT_GRID_SIZE);