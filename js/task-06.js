const inputEl = document.querySelector("#validation-input");
const length = inputEl.getAttribute("data-length");
const lengthValue = Number(length);

inputEl.addEventListener("blur", inputBlurHandler);

function inputBlurHandler(event) {
  if (event.currentTarget.value.length === lengthValue) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
    // console.log('Мало символов!');
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
