let container = document.querySelector(".container");
let input = document.querySelector("input");
let result = document.querySelector(".result");
let btn = document.querySelector("button");
let closeTask = document.querySelector(".delete");

btn.addEventListener("click", function () {
  console.log(input.value);
  if (input.value == 0) {
    alert("Enter Task");
  } else {
    let li = document.createElement("li");
    li.textContent = input.value;
    let icon = document.createElement("p");
    icon.classList.add("delete");
    icon.textContent = "Delete";
    li.append(icon);
    container.appendChild(li);
    input.value = "";
  }
});
container.addEventListener("click", function (e) {
  if (e.target.tagName === "P") {
    e.target.parentElement.remove();
  }
});
