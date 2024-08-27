const mainDiv = document.getElementById("productsList");
const fetchData = async () => {
  // let myProduct = input.value
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  console.log(data.products);
  displayData(data.products);
};
fetchData();

const displayData = (data) => {
  mainDiv.textContent = "";
  data.forEach((val) => {
    const proDiv = document.createElement("div");
    proDiv.classList.add("product");

    const proImage = document.createElement("img");
    proImage.src = val.thumbnail;

    const proTitle = document.createElement("h2");
    proTitle.classList.add('product-title')
    proTitle.textContent = val.title;

    const proPrice = document.createElement("p");
    proPrice.classList.add("product-price")
    proPrice.textContent = "Price: ₹" + val.price;

    const proLink = document.createElement("a");
    proLink.append(proTitle);
    proLink.href = `./product.html?pid=${val.id}`;

    const proButton = document.createElement("button");
    proButton.classList.add('product-button')
    proButton.textContent = "Add To Cart";
    proButton.addEventListener("click",() => updateCount(val))
    
    proDiv.append(proImage, proLink, proPrice, proButton);
    mainDiv.append(proDiv);
  });
};

const fetchCategories = () => {
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((elm) => {
        const op = document.createElement("option");
        op.value = elm.slug;
        op.textContent = elm.name;
        document.getElementById("cat").append(op);
      });
    });
};
fetchCategories();

document.getElementById("cat").addEventListener("input", function (e) {
  fetch(`https://dummyjson.com/product/category/${e.target.value}`)
    .then((res) => res.json())
    .then((data) => {
      displayData(data.products);
    });
});

let input = document.querySelector(".search-product");
let searchBtn = document.querySelector(".Search-btn");
input.addEventListener("input", function () {
    let myProduct = input.value
    // if(input.value == 0)
  fetch(`https://dummyjson.com/products/search?q=${myProduct}`)
    .then((res) => res.json())
    .then((data) => {
      displayData(data.products);
    });
});
