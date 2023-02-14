const inputEl = document.querySelector('#name-input');
const nameEl = document.querySelector('#name-output');

inputEl.addEventListener('input', inputChangeHandler);

function inputChangeHandler(event) {
    if (event.currentTarget.value === "") {
        nameEl.textContent = 'Anonymous';
    }
    else {
        nameEl.textContent = event.currentTarget.value;
    }
    
}