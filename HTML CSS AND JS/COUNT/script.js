// alert("hello")
let count = document.getElementById("count")
let category = document.getElementById("category")

let i= 0;

function increment(){
    i++
    console.log(i)
    if(i>=21){
        alert("Exceed Maximum Number")
    }else{
    count.textContent = i;
        if(i%2 == 0){
            category.textContent = "Even"
        }else{
            category.textContent = "Odd"
        }
    }

}
function decrement(){
    i--;
    console.log(i)
    if(i<0){
        alert("Manimum Number is zero")
    }else{
    count.textContent = i;
    if(i%2 == 0){
        category.textContent = "Even"
    } else{
        category.textContent = "Odd"
    }
    }
}
function reset(){
    i = 0;
    console.log(i)
    if(i==0){
        alert("count clear successfully")
    count.textContent = "Zero";

    }
}

let des = document.querySelector(".description")
let des1 = document.querySelector(".description-1")
let des2 = document.querySelector(".description-2")

function change(){
    des.classList.toggle("active")
    des1.classList.remove("active1")
    des2.classList.remove("active2")
}

function change1(){
    des1.classList.toggle("active1")
    des.classList.remove("active")
    des2.classList.remove("active2")
}

function change2(){
    des2.classList.toggle("active2")
    des1.classList.remove("active1")
    des.classList.remove("active")
}

let darkMode = document.querySelector(".darkmode")
let lightMode = document.querySelector(".lightmode")

function dark(){
    document.body.style.background = "black"
    document.body.style.boxShadow = "0 0 20px #fff"
}
function light(){
    document.body.style.background = "white"
    document.body.style.boxShadow = "0 0 20px #fff"
}