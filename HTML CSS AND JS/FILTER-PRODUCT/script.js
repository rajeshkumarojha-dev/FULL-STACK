
let mainDiv = document.querySelector('.container')
let product =[]
function fetchData(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data=>{
        // console.log(data)
        product = data;
        displayData(data)
    })
}
fetchData()

function displayData(data){
    mainDiv.textContent = ''
    data.forEach(elm=>{
        // console.log(elm)

        let box = document.createElement('div')
        box.classList.add('product-box')

        let ImageBox = document.createElement('div')
        ImageBox.classList.add('image-content')

        let image = document.createElement('img')
        image.src = elm.image

        let textBox = document.createElement('div')
        textBox.classList.add('text-box')

        let title = document.createElement('h5')
        title.textContent = elm.title

        let category = document.createElement('p')
        category.classList.add('category')
        category.textContent = `Category : ${elm.category}`

        let price = document.createElement('p')
        price.classList.add('price')
        price.textContent = `price : $${elm.price}`

        ImageBox.append(image)
        textBox.append(title,category,price)
        box.append(ImageBox,textBox)
        mainDiv.appendChild(box)
    })
}

let selection = document.querySelector('#selection')


function filterProduct() {
    const newArray = product.filter((val) => val.category == selection.value)
    displayData(newArray)
}
selection.addEventListener('input', filterProduct)


