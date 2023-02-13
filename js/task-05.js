const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');
inputEl.addEventListener('input', inputChangeHandler)
function inputChangeHandler(event) {
    nameEl.textContent = event.currentTarget.value;
}