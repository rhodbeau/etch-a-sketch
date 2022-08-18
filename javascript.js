const container = document.querySelector(".container");
let size = 16;

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.classList.add('item');
            row.appendChild(div);
        }
        container.appendChild(row);
    }

    const squares = document.querySelectorAll('.item');
    squares.forEach(square => square.addEventListener('mouseenter', changeBackground));
}


function clearGrid(e){
    const squares = document.querySelectorAll('.item');
    //squares.forEach(square => square.classList.remove('hover'));
    squares.forEach(square => square.setAttribute('style', 'background-color: whitesmoke'));
}
const clear = document.getElementById('clear');
clear.addEventListener('click', clearGrid);


function createNewGrid(e){
    do {
        size = prompt("Enter new size of grid");
    }
    while (size > 100);

    let deleteRows = document.querySelectorAll('.row');
    deleteRows.forEach(deleteRow => container.removeChild(deleteRow));

    createGrid(size);
}
const newGrid = document.getElementById('newGrid');
newGrid.addEventListener('click', createNewGrid);


function changeBackground(e) {
    this.classList.add('hover');

    let r = randomColorNumber();
    let g = randomColorNumber();
    let b = randomColorNumber();

    this.setAttribute('style', `background-color: rgb(${r}, ${g}, ${b})`);
}


function randomColorNumber() {
    return Math.floor(Math.random() * 256);
}

createGrid(size);