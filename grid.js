const grid=document.querySelector(".grid");
const gridDimension=grid.getBoundingClientRect();
const gridWidth=gridDimension.width;
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
    square.addEventListener("mouseover",()=>square.style.backgroundColor="yellow")
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
    document.body.removeChild(previousGrid);
    let newGrid=document.createElement("div");
    newGrid.setAttribute("class","grid");
    document.body.appendChild(newGrid);
    createGrid(newBase,newGrid);
    fillSquare();
})