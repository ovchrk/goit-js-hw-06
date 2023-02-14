const inputEl = document.querySelector('#validation-input');
const length = inputEl.getAttribute('data-length');
console.log(length);

inputEl.addEventListener('blur', inputBlurHandler);

function inputBlurHandler(event) {
    if (inputEl.textContent.length < length) {
        console.log('Мало символов!');
        // inputEl.setAttribute("id", "validation-input.invalid");
        // inputEl.style.borderColor =  
    }
    else {
        inputEl.classList.add('.valid');
    }
};
