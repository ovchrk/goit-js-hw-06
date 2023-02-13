let counterValue = 0;
const valueEl = document.querySelector('#value');
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
});

// function buttonClickHandler() {
//     console.log(`Click`)
// }