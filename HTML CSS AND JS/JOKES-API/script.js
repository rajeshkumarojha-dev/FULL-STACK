
let mainDiv = document.querySelector('.container')
let jokeBox = document.querySelector(".content")
let newJoke = document.querySelector("button")


let myData;
function fetchData(){
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res=> res.json())
    .then(function(data){
        // console.log(data)
        myData = data
        displayData()
    })
}
fetchData()

newJoke.addEventListener("click", fetchData)
function displayData(){
    jokeBox.textContent = ''

    let joke = document.createElement("h3")
    joke.innerHTML = `JOKE :  ${myData.setup}`;

    let punchline = document.createElement("h3")
    punchline.innerHTML = `PUNCHLINE : ${myData.punchline}`;

    jokeBox.append(joke,punchline)
    mainDiv.appendChild(jokeBox)

}
