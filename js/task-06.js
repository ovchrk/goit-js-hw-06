const inputEl = document.querySelector('#validation-input');
const length = inputEl.getAttribute('data-length');
// console.log(length);

inputEl.addEventListener('blur', inputBlurHandler);

function inputBlurHandler(event) {
    if (event.currentTarget.value.length < length) {
        // console.log('Мало символов!');
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
        
    }
    else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
        // console.log(`Количество символов больше 6.`);
    }
    
};
