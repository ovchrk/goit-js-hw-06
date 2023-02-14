const formEl = document.querySelector(".login-form");

formEl.addEventListener('submit', formSubmitHandler);

function formSubmitHandler(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    
    if (email === "" || password === "") {
        alert(`Please fill in all fields!`);
    };

    const formData = {
        email,
        password,
    };

    console.log(formData);

    // console.log(event.currentTarget.elements);
    // console.log(event.currentTarget.elements.email.value);
    // console.log(event.currentTarget.elements.password.value);

};
