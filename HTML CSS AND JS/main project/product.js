const params = new URLSearchParams(window.location.search)

const pid = params.get('pid')
console.log(pid)

const fetchData = async() =>{
    const res = await fetch(`https://dummyjson.com/products/${pid}`)
    const data = await res.json()
    displayData(data)
}
fetchData()

const leftDiv = document.getElementById('left');
const rightDiv = document.getElementById('right');

function displayData(data){
    const proImage = document.createElement('img')
    proImage.src = data.thumbnail
    proImage.alt = data.title
    leftDiv.appendChild(proImage)

    const proTitle = document.createElement('h2')
    proTitle.textContent = data.title

    const proDesc = document.createElement('p')
    proDesc.textContent = data.description
    
    const proPrice = document.createElement('p')
    proPrice.classList.add('product-price')
    proPrice.textContent = "Price: ₹"+ data.price

    const addCartButton = document.createElement('button')
    addCartButton.classList.add("product-button")
    addCartButton.textContent = 'Add To Cart'
    addCartButton.addEventListener('click', updateCount(data))

    rightDiv.append(proTitle,proDesc,proPrice,addCartButton)

}
// displayData(data)