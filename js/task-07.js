const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', inputChangeHandler);

function inputChangeHandler(event) {
    const fontSizeValue = event.currentTarget.value;
    console.log(fontSizeValue);
    textEl.style.fontSize = `${fontSizeValue}px`;  
};

