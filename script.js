const back=document.getElementById("back");
const forward=document.getElementById("forward");

const slider=document.getElementById("slider_");
forward.addEventListener("click",()=>{
    slider.style.transform="translateX(-50%)";
})
back.addEventListener("click",()=>{
    slider.style.transform="translateX(0%)";
})

