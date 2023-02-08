// import { likeActions } from "./likes.js";

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
    (item) =>
      `<button class="categoryslctd" >${item.strCategory}</button><span class="cntspnmeals dNone" data-user="${item.strCategory}"  ></span>`
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
const countMealsFct = (elm, ctn) => {
  const cntspnmeals = document.querySelectorAll(".cntspnmeals");
  cntspnmeals.forEach((countsMl) => {
    if (countsMl.dataset.user === elm) {
      countsMl.textContent = ctn;
    }
  });
};

// display all meals
const getOptionsData = async (element) => {
  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + element;
  menuOptions.innerHTML = "";

  const response = await fetch(url);
  const resultData = await response.json();
  const allOptions = resultData.meals;
  const mealsCount = Object.keys(resultData.meals).length;
  countMealsFct(element, mealsCount);

  const displayMenuOptions = allOptions.map(
    (item) => `
        <div class="card m-2 px-0 singleMeal" style="width: 12rem;" id="${item.idMeal}" data-id="${item.idMeal}">
      <img src="${item.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${item.strMeal}</h5>
        <h5 class="card-title">${item.idMeal}</h5>
        <a href="#" class="btn likeButton">🤍</a>
        
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
  //   likeActions();
  //   commentBtnAction();
};

export const optionsBtn = () => {
  //   getOptionsData("Seafood");

  const options = document.querySelectorAll(".categoryslctd");
  options.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.preventDefault();
      const category = e.target.textContent;

      document.querySelector(".menuActive")
        ? document.querySelector(".menuActive").classList.remove("menuActive")
        : "";
      e.target.classList.add("menuActive");

      for (let i = 0; i < options.length; i++) {
        options[i].nextSibling.style.display = "none";
      }
      e.target.nextSibling.style.display = "inline-block";

      getOptionsData(category);
    });
  });
};
