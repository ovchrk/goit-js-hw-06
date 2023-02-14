const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();
    const formEmailValue = event.currentTarget.elements.email.value;
    const formPasswordValue = event.currentTarget.elements.password.value;
    
    if (formEmailValue === "" || formPasswordValue === "") {
        alert(`Please, fill in all fields!`);
    }

    // console.log(event.currentTarget.elements);
    // console.log(event.currentTarget.elements.email.value);
    // console.log(event.currentTarget.elements.password.value);

};
