const containerDiv = document.querySelector(".container");

let size = 16

function initialize(sideLength = size) {
    const previousGrid = Array.from(document.querySelectorAll(".square"));
    previousGrid.forEach((square)=>{square.remove();});
    for (let i = 0; i < sideLength * sideLength; ++i) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.height = `${960 / sideLength}px`;
        squareDiv.style.width = `${960 / sideLength}px`;
        squareDiv.style.opacity = "1";
        squareDiv.style.backgroundColor = "white";
        containerDiv.appendChild(squareDiv);
        squareDiv.addEventListener("mouseover", () => {
            if (squareDiv.style.backgroundColor !== "white") {
                squareDiv.style.opacity -= 0.1;
                return;
            }
            squareDiv.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        });
    }
}

document.querySelector(".initialize").addEventListener("click", () => {
    do {
        size =
        prompt("A new square grid will be created, how many \"pixels\" should each side be?");
    }
    while (!Number.isInteger(+size) || +size > 100 || +size <= 0);
    initialize(size);    
});

initialize(size);