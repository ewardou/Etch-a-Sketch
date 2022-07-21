const grid=document.querySelector(".grid");
const gridDimension=grid.getBoundingClientRect();
const gridWidth=gridDimension.width;
let base=16
let dimension=base**2;

for (let i=1;i<=dimension;i++){
    const div=document.createElement("div");
    div.setAttribute("class","square");
    let squareDimension=gridWidth/base+"px";
    div.style.width=squareDimension;
    div.style.height=squareDimension;
    grid.appendChild(div);
}