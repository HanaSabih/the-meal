// const commCount = document.querySelector(".commentsNum");

// import { commDisplay } from "./modal.js";

// const getCount = () => {
//     let counted = 0;
//     const displayed = commDisplay.getElementsByTagName("li");
//     Array.prototype.forEach.call(displayed, () => {
//         counted += 1;
//     });
//     commCount.innerText = counted;
// };
  
const getCount = () => {
    const list = document.querySelectorAll(".shown-comment");
    const counted = list.length;
    return counted;
}

export default getCount