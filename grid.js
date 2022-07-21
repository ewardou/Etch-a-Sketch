const grid=document.querySelector(".grid");
const gridDimension=grid.getBoundingClientRect();
const gridWidth=gridDimension.width;
const frame=document.querySelector(".frame");
let base=8

function createGrid(base,container){
    for (let i=1;i<=base**2;i++){
    const div=document.createElement("div");
    div.setAttribute("class","square");
    let squareDimension=gridWidth/base+"px";
    div.style.width=squareDimension;
    div.style.height=squareDimension;
    container.appendChild(div);
    }
}

createGrid(base,grid);
fillSquare();

function fillSquare(){
    const squares=document.querySelectorAll(".square")
    squares.forEach(square=>{
    square.addEventListener("mouseover",(event)=>{
        if (event.shiftKey){
            return
        };
        square.style.backgroundColor="black";
        })
    })
}

const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    let newBase=+prompt("Number of squares per row",16);
    if (newBase>100 || newBase===0){
        alert ("Please input a number up to 100.");
        return false;
    }
    let previousGrid=document.querySelector(".grid");
    frame.removeChild(previousGrid);
    let newGrid=document.createElement("div");
    newGrid.setAttribute("class","grid");
    frame.appendChild(newGrid);
    createGrid(newBase,newGrid);
    fillSquare();
})

function randomColor(){
    return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
}
function fillSquareRandom(){
    const squares=document.querySelectorAll(".square")
    squares.forEach(square=>{
    square.addEventListener("mouseover",(event)=>{
        if (event.shiftKey){
            return
        };
        square.style.backgroundColor=randomColor();
        })
    })
}

const random=document.querySelector(".random");
random.addEventListener("click",fillSquareRandom);

const black=document.querySelector(".black");
black.addEventListener("click",fillSquare);

const erase=document.querySelector(".erase");

function fillSquareErase(){
    const squares=document.querySelectorAll(".square")
    squares.forEach(square=>{
    square.addEventListener("mouseover",()=>square.style.backgroundColor="white")
    })
}
erase.addEventListener("click",fillSquareErase);