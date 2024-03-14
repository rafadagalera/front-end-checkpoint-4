const readMoreBtn = document.querySelector(".read--more--btn")
const text = document.querySelector(".description--text")

readMoreBtn.addEventListener("click",(e)=>{
    text.classList.toggle("show--more");
    if(readMoreBtn.innerText === "Mostrar mais"){
        readMoreBtn.innerText = "Mostrar menos";
    }
    else{
        readMoreBtn.innerText = "Mostrar mais";
    }
})