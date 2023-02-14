function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(".change-color");
const textEl = document.querySelector(".color");
const bgArea = document.querySelector("body");

buttonEl.addEventListener('click', buttonClickHandler);

function buttonClickHandler(event) {
  bgArea.style.backgroundColor = `${getRandomHexColor()}`;
  textEl.textContent = `${getRandomHexColor()}`;
  // console.log(getRandomHexColor());
};
