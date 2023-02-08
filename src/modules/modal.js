import { postComment, getComments } from "./involvement";

// const modalContainer = document.querySelector(".modalContainer");
const modalTitle = document.querySelector(".modal-title");
const modalImg = document.querySelector(".modalImg");

const categoryMdl = document.querySelector(".categoryMdl");
const areaMdl = document.querySelector(".areaMdl");
const tagsMdl = document.querySelector(".tagsMdl");

const commDisplay = document.querySelector(".comntContainer");
const addCmtBtn = document.querySelector("#addCmtForm");
const user = document.querySelector("#nameCmt");
const message = document.querySelector("#textCmt");

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
      displayComments(commentIdS);
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

const displayComments = (hostId) => {
  const allComments = getComments(hostId);
  let cmntsMarkup = "";
  cmntsMarkup = allComments.map(
    (item) => `<li>${item.creation_date} - ${item.username} <br> ${item.comment}</li>`
  );
  commDisplay.innerHTML = cmntsMarkup.join(" ");
}

addCmtBtn.onsubmit = (e) => {
  e.preventDefault();
  const mealId = addCmtBtn.closest(".singleMeal").dataset.id;
  postComment(mealId, user, message);
  displayComments(mealId);
  
}