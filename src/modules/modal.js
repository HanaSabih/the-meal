import getCount from './commentcounter.js';
import { postComment, getComments } from './involvement.js';

const modalTitle = document.querySelector('.modal-title');
const modalImg = document.querySelector('.modalImg');
const modalId = document.querySelector('#mdl-Id');

const categoryMdl = document.querySelector('.categoryMdl');
const areaMdl = document.querySelector('.areaMdl');
const tagsMdl = document.querySelector('.tagsMdl');

export const commDisplay = document.querySelector('.comntContainer');
const commCount = document.querySelector('.commentsNum');
const addCmtBtn = document.querySelector('#addCmtForm');
const user = document.querySelector('#nameCmt');
const message = document.querySelector('#textCmt');

// Display comments in popup
const displayComments = async (hostId) => {
  const allComments = await getComments(hostId);
  if (allComments === 0) {
    return;
  }
  let cmntsMarkup = '';
  allComments.forEach((item) => {
    cmntsMarkup += `<li class="shown-comment">${item.creation_date} - ${item.username} <br> ${item.comment}</li>`;
  });
  commDisplay.innerHTML = cmntsMarkup;
  const comments = await getCount();
  commCount.innerHTML = comments;
};

const changeId = () => {
  const newId = modalId.getAttribute('id');
  return newId;
};

// Add comment function
const addCmtBtnAction = () => {
  addCmtBtn.onsubmit = async (e) => {
    e.preventDefault();
    const mealId = changeId();
    await postComment(mealId, user, message);
    displayComments(mealId);
    addCmtBtn.reset();
  };
};

// populate popup
const getMealData = async (url) => {
  const response = await fetch(url);
  const resultData = await response.json();
  const mealDes = resultData.meals[0];
  modalTitle.innerHTML = mealDes.strMeal;
  modalImg.src = mealDes.strMealThumb;
  modalId.id = mealDes.idMeal;

  categoryMdl.innerHTML = `Category: ${mealDes.strCategory}`;
  areaMdl.innerHTML = `Area: ${mealDes.strArea}`;
  tagsMdl.innerHTML = `Tags: ${mealDes.strTags}`;
  addCmtBtnAction();
};

const setMealUrl = (mealId) => {
  getMealData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
};

// Activate Popup Button
export const commentBtnAction = () => {
  const commentBtnS = document.querySelectorAll('.commentBtn');
  commentBtnS.forEach((commentBtn) => {
    commentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const commentIdS = commentBtn.closest('.singleMeal').dataset.id;
      setMealUrl(commentIdS);
      displayComments(commentIdS);
    });
  });
};
