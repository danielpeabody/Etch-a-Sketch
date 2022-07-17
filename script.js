


/*
@ param {number} size; Number of rows and columns for the grid
*/
function createGrid(size){
    const mainGrid = document.querySelector(".main-container");
    for(let y = 0; y < size; y++){
        const newContainer = document.createElement('div');
        newContainer.classList.add('container');
        mainGrid.appendChild(newContainer);
        for(let x = 0; x < size; x++){
            const newPix = document.createElement('div');
            newPix.classList.add('container');
            newPix.classList.add('container-pix');
            newPix.addEventListener('mouseover',changeColor);
            newPix.addEventListener('mousedown',changeColor);
            newContainer.appendChild(newPix);
        }
    }
}

createGrid(20);

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e){
    if(e.type === 'mouseover'){
        if(mouseDown){
            e.target.style.backgroundColor = 'green';
        }
    };
}