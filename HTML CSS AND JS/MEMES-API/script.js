let imageDiv = document.querySelector(".image")
let title = document.querySelector(".text")
let button = document.querySelector("button")

let myData;
function fetchData(){
    fetch("https://meme-api.com/gimme")
    .then(res=> res.json())
    .then(function(data){
        // console.log(data)
        myData=data
        displayData()
    })
    .catch(error => console.log(error))
}
fetchData()
button.addEventListener('click',fetchData)
function displayData(){
    imageDiv.textContent = ''
    const imageTag = document.createElement("img")
    imageTag.src = myData.url;
    imageDiv.appendChild(imageTag)
    title.textContent = myData.title 
}