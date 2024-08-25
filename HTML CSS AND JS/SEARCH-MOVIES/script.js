// url = https://www.omdbapi.com/?s=%22titanic%22&apikey=e735494c

let button = document.querySelector(".search");
let input = document.querySelector(".input-text");
let mainDiv = document.querySelector(".movies");
let box = document.querySelector(".movies-box");

// let mydata;
function fetchData() {
  movieName = input.value;
  fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=e735494c`)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.Search);
      displayData(data.Search);
    });
}
fetchData();
button.addEventListener("click", fetchData);

function displayData(data) {
  
  mainDiv.textContent = "";

  if (movieName == 0) {
    let not = document.createElement("h1");
    not.textContent = "Page Not Found";
    mainDiv.appendChild(not);
  } else {
    data.forEach((movie) => {
      let moviesBox = document.createElement("div");
      moviesBox.classList.add("movies-box");

      let image = document.createElement("img");
      image.src = movie.Poster;

      let moviesText = document.createElement("div");
      moviesText.classList.add("movies-text");

      let moviesTitle = document.createElement("h1");
      moviesTitle.textContent = movie.Title;

      let Link = document.createElement("a");
      // https://www.imdb.com/title/tt33042231/?ref_=hm_hp_cap_pri_hero-video-2_3
      Link.href = `https://www.imdb.com/title/${movie.imdbID}`;
      moviesTitle.textContent = movie.Title;

      let moviestype = document.createElement("h4");
      moviestype.textContent = `Type : ${movie.Type}`;

      let moviesYear = document.createElement("h4");
      moviesYear.textContent = `Year : ${movie.Year}`;

      moviesText.append(moviesTitle, moviestype, moviesYear);

      Link.append(image);
      moviesBox.append(Link, moviesText);
      mainDiv.appendChild(moviesBox);
    });
  }
}

let dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");

  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  if (document.body.classList.contain("dark")) {
    dayNight.querySelector("i").classList.add("fa-sun");
  } else {
    dayNight.querySelector("i").classList.add("fa-moon");
  }
});

let glowingBtn = document.querySelector(".glowing-btn");
let container = document.querySelector(".box");

glowingBtn.addEventListener("click", () => {
  container.classList.add("active");
  glowingBtn.style.display = "none";
});

let close = document.querySelector(".close");

close.addEventListener("click", () => {
  container.classList.remove("active");
  glowingBtn.style.display = "block";
});
