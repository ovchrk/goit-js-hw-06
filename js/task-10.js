function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector('input[type="number"]');
const boxesEl = document.querySelector("#boxes");

let size = 20;
let counterValue = 0;
const boxList = [];

inputEl.addEventListener("input", inputChangeHandler);

function inputChangeHandler(event) {
  counterValue = event.currentTarget.value;
}

btnCreate.addEventListener("click", createButtonClickHandler);

function createBoxes(amount) {
  for (let i = 1; i <= amount; i += 1) {
    size += 10;
    const boxEl = document.createElement("div");
    boxEl.classList.add("box");
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    boxEl.style.backgroundColor = `${getRandomHexColor()}`;
    boxList.push(boxEl);
  }
}

function createButtonClickHandler(event) {
  createBoxes(counterValue);
  boxesEl.append(...boxList);
}

btnDestroy.addEventListener("click", destroyButtonClickHandler);

function destroyButtonClickHandler(event) {
  boxesEl.innerHTML = "";
}

// let text = ``;
// text += `<div class="box" width="${size}px" height="${size}px">Text</div>`;
// function createButtonClickHandler(event) {
//   createBoxes(counterValue);
//   boxesEl.innerHTML = `${text}`;
//   console.log(boxesEl.innerHTML);
// }
