let DEFAULTCOLOR = 'black';
let DEFAULTSIZE = 16;


let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)


/*
set color for sketch pad
*/
let color = document.querySelector(".colorPick")
let submitColor = document.getElementById("colorbutton");
submitColor.addEventListener("click",function(){
    DEFAULTCOLOR = color.value;
    console.log(DEFAULTCOLOR);
    color.value = "";
})

// change color for sketch pad
function changeColor(e){
    if(e.type === 'mouseover'){
        if(mouseDown){
            e.target.style.backgroundColor = DEFAULTCOLOR;
        }
    }
    else{
        e.target.style.backgroundColor = DEFAULTCOLOR;
    }
}

//set size for grid for sketch pad
let size = document.querySelector(".sizePick")
let submitSize = document.getElementById("sizebutton");
submitSize.addEventListener("click",function(){
    DEFAULTSIZE = size.value;
    createGrid(DEFAULTSIZE);
    size.value = "";
})


const reset = document.querySelector(".resetButton")
reset.addEventListener('click',function(){
    createGrid();
})


/*
@ param {number} size; Number of rows and columns for the grid
*/
function createGrid(size){
    const mainGrid = document.querySelector(".pix-container");
    while (mainGrid.firstChild){
        mainGrid.removeChild(mainGrid.firstChild);
    }
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
            newPix.addEventListener('touchstart',changeColor);
            newPix.addEventListener('touchmove',changeColor);
            newContainer.appendChild(newPix);
        }
    }
}

createGrid(DEFAULTSIZE);