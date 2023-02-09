
import { commentBtnAction } from "./modal.js";
import { likeButtonAction, getLikesNumber } from "./likes.js";

const menuCategories = document.querySelector(".menuCategories");
const menuOptions = document.querySelector(".menuOptions");

// menuCategories
// https://www.themealdb.com/api/json/v1/1/list.php?c=list

const menuListUrl = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

export const getData = async (url) => {
  menuCategories.innerHTML = "";
  const response = await fetch(url);
  const resultData = await response.json();
  const allCategories = resultData.meals;
  let displayMenuCategories = "";
  displayMenuCategories = allCategories.map(
    (item) =>
      `<div class="position-relative">
      <button type="button"  class="btn categoryslctd px-2 py-1 fs-4 m-3 " >${item.strCategory}</button>
      <span class="cntspnmeals   position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" data-user="${item.strCategory}"  ></span>
      </div>`
  );
  menuCategories.innerHTML = displayMenuCategories.join(" ");
  optionsBtn();
};

// const setOptionsUrl = (element) => {
//   getOptionsData(
//     "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + element
//   );
//
// };
export const itemsCounter = (elm, options) => {
  const cntspnmeals = document.querySelectorAll(".cntspnmeals");
  cntspnmeals.forEach((countsMl) => {
    if (countsMl.dataset.user === elm) {
      countsMl.textContent = `(${options})`;
    }
  });
};
export const mealsCnt = (data) => {
  const mealsCount = Object.keys(data).length;
  return mealsCount;
};
// display all meals
const getOptionsData = async (element) => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + element;
  menuOptions.innerHTML = "";

  const response = await fetch(url);
  const resultData = await response.json();
  const allOptions = resultData.meals;
  const count = mealsCnt(allOptions);
  // const mealsCount = Object.keys(allOptions).length;
  itemsCounter(element, count);

  const displayMenuOptions = allOptions.map(
    (item) => `
        <div class="card m-2 px-0 singleMeal shadow-lg p-3 mb-5 bg-body rounded" style="width: 12rem;" id="${item.idMeal}" data-id="${item.idMeal}">
      <img src="${item.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${item.strMeal}</h5>
        <h5 class="card-title">${item.idMeal}</h5>
        <button class="likeButton border-0 bg-transparent" >🤍</button>
        
        <span class="displayLikes">0</span>
        <p>Likes</p>
        <button type="button" class="btn btn-primary commentBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">Comments
  </button>
        
      </div>
    </div>`
  );

  menuOptions.innerHTML = displayMenuOptions.join(" ");

  commentBtnAction();
  likeButtonAction();
  getLikesNumber();
};

export const optionsBtn = () => {
  const options = document.querySelectorAll(".categoryslctd");
  options.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.textContent;

      document.querySelector(".menuActive")
        ? document.querySelector(".menuActive").classList.remove("menuActive")
        : "";
      e.target.classList.add("menuActive");

      // for (let i = 0; i < options.length; i++) {
      //   options[i].nextSibling.style.visibility = "hidden";
      // }
      // e.target.nextSibling.style.visibility = "visible";

      getOptionsData(category);
    });
  });
};
