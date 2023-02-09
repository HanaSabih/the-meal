const singleMeal = document.querySelectorAll(".singleMeal");
const url =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7P9rWHY7WsKk1rSNM8nF/likes";
  

export const getLikesNumber = async () => {
  const cards = document.querySelectorAll(".singleMeal");
  const likeCount = document.querySelectorAll(".displayLikes");
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};
export const likeButtonAction = async () => {
  const likeButtons = document.querySelectorAll(".likeButton");
  const likeBtnCount = document.querySelectorAll(".displayLikes");
  likeButtons.forEach((btn, index) => {
    btn.addEventListener("click", (e) => {
      e.target.textContent = "❤️";
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          item_id: btn.closest(".singleMeal").dataset.id,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    });
  });
};
