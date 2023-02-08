const modalContainer = document.querySelector(".modalContainer");
const modalTitle = document.querySelector(".modal-title");
const modalImg = document.querySelector(".modalImg");

const categoryMdl = document.querySelector(".categoryMdl");
const areaMdl = document.querySelector(".areaMdl");
const tagsMdl = document.querySelector(".tagsMdl");

// https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

const setMealUrl = (mealId) => {
  getMealData("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId);
};
export const commentBtnAction = () => {
  const commentBtnS = document.querySelectorAll(".commentBtn");
  commentBtnS.forEach((commentBtn) => {
    commentBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const commentIdS = commentBtn.closest(".singleMeal").dataset.id;
      setMealUrl(commentIdS);
    });
  });
};
const getMealData = async (url) => {
  const response = await fetch(url);
  const resultData = await response.json();
  const mealDes = resultData.meals[0];
  modalTitle.innerHTML = mealDes.strMeal;
  modalImg.src = mealDes.strMealThumb;

  categoryMdl.innerHTML = "Category: " + mealDes.strCategory;
  areaMdl.innerHTML = "Area: " + mealDes.strArea;
  tagsMdl.innerHTML = "Tags: " + mealDes.strTags;
};