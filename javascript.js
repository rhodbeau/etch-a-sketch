const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        let div = document.createElement("div");
        div.classList.add('item');
        div.setAttribute('style', 'border-color: black; border-width: thin; border-style: solid;');
        row.appendChild(div);
    }
    container.appendChild(row);
}

function changeBackground(e){
    this.classList.add('hover');
}

const squares = document.querySelectorAll('.item');
squares.forEach(square => square.addEventListener('mouseenter', changeBackground));
