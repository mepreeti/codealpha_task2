
let  css=document.querySelector("h3");
let color1=document.querySelector(".color1");
let color2=document.querySelector(".color2");

let body=document.getElementById("gradiant");
let random=document.querySelector(".random");
function gradiantChange()

{
    console.log(body.style.background);
    body.style.background=`linear-gradient(to right,${color1.value},${color2.value})`;
    css.textContent=`${body.style.background};`;
}

function randomColor(){
    let color="#";
    for(let i=0; i < 6; i++){
        color +=Math.floor(Math.random()*10)
    }
    return color;
}
function setRandomColor(){
    console.log(randomColor());
    color1.value=randomColor();
    color2.value=randomColor();
    gradiantChange();
}
    color1.addEventListener("input",gradiantChange);
    color2.addEventListener("input",gradiantChange);
    random.addEventListener("click",setRandomColor);