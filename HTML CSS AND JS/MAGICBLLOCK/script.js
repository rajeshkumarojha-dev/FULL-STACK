

const popUp = document.querySelector(".pop-up")
const close = document.querySelector(".close")
const container = document.querySelector(".container")

popUp.addEventListener("click",()=>{
    container.classList.toggle("container-active")
})
close.addEventListener("click",()=>{
    container.classList.remove("container-active")
})

const selector = document.querySelector("#overlay")
const puffinClick = document.querySelector(".puffinClick")

puffinClick.addEventListener("click",function(){
    selector.style.animation = "puffIn 2s linear"
});

const selector1 = document.querySelector("#overlay1")
const puffOut = document.querySelector(".puffOutClick")

puffOut.addEventListener("click",function(){
    selector1.style.animation = "puffOut 2s linear"
});

const selector2 = document.querySelector("#overlay2")
const puffVanish = document.querySelector(".puffvanish")

puffVanish.addEventListener("click",function(){
    selector2.style.animation = "vanishIn 2s linear"
});

const selector3 = document.querySelector("#overlay3")
const puffMagic = document.querySelector(".puffmagic")

puffMagic.addEventListener("click",function(){
    selector3.style.animation = "magic 2s linear"
});

const selector4 = document.querySelector("#overlay4")
const puffSwap = document.querySelector(".puffswap")

puffSwap.addEventListener("click",function(){
    selector4.style.animation = "swap 2s linear"
});

const selector5 = document.querySelector("#overlay5")
const puffTwister = document.querySelector(".PuffTwister")

puffTwister.addEventListener("click",function(){
    selector5.style.animation = "twisterInUp 2s linear"
});

const selector6 = document.querySelector("#overlay6")
const puffdown = document.querySelector(".puffDown")

puffdown.addEventListener("click",function(){
    selector6.style.animation = "perspectiveDownReturn 2s linear"
});

const selector7 = document.querySelector("#overlay7")
const puffBoing = document.querySelector(".puffboing")

puffBoing.addEventListener("click",function(){
    selector7.style.animation = "boingInUp 2s linear"
});
