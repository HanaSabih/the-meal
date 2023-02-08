// import { commentBtnAction } from "./modal.js";

const menuCategories = document.querySelector(".menuCategories");
const menuOptions = document.querySelector(".menuOptions");

// menuCategories
// https://www.themealdb.com/api/json/v1/1/list.php?c=list
// mealsMenu
// https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

const menuListUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

export const getData = async (url) => {
  menuCategories.innerHTML = "";
  const response = await fetch(url);
  const resultData = await response.json();
  const allCategories = resultData.meals;
  let displayMenuCategories = "";
  displayMenuCategories = allCategories.map(
    (item) => `<button class="categoryslctd" >${item.strCategory}</button>`
  );
  menuCategories.innerHTML = displayMenuCategories.join(" ");
  optionsBtn();
};

const setOptionsUrl = (element) => {
  getOptionsData(
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + element
  );
};
// display all meals
const getOptionsData = async (url) => {
  menuOptions.innerHTML = "";
  const response = await fetch(url);
  const resultData = await response.json();
  const allOptions = resultData.meals;

  const displayMenuOptions = allOptions.map(
    (item) => `
        <div class="card m-2 px-0 singleMeal" style="width: 12rem;" id="${item.idMeal}" data-id="${item.idMeal}">
      <img src="${item.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${item.strMeal}</h5>
        <h5 class="card-title">${item.idMeal}</h5>
        <a href="#" class="btn unLikeBtn">🤍</a>
        <a href="#" class="btn likeBtn">❤️</a>
        <span class="displayLikes">0</span>
        <p>Likes</p>
        <button type="button" class="btn btn-primary commentBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Comments
  </button>
  <button type="button" class="btn btn-primary reservationBtn" >reservations
  </button>
        
      </div>
    </div>`
  );

  menuOptions.innerHTML = displayMenuOptions.join(" ");

  //   commentBtnAction();
};

export const optionsBtn = () => {
  setOptionsUrl("Seafood");
  const options = document.querySelectorAll(".categoryslctd");
  options.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.textContent;
      setOptionsUrl(category);
    });
  });
};
