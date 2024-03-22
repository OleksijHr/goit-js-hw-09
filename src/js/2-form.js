const localStorageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("[type='email']");
const feedbackMessage = document.querySelector("textarea");



const user = {
    email: "",
    message: "",
};

form.addEventListener("input", onFormsInput);
form.addEventListener("submit", handleSubmit);

populateTextarea();


function handleSubmit(event) {
    event.preventDefault();

    console.log(user);

    localStorage.removeItem(localStorageKey);
    event.target.reset();
};


function populateTextarea() {
    const savedUser = localStorage.getItem(localStorageKey, user);

    if (emailInput.value === "" && feedbackMessage.value === "") {
         if (savedUser) {
            emailInput.value = JSON.parse(savedUser).email;
            feedbackMessage.value = JSON.parse(savedUser).message;
             
             user.email = JSON.parse(savedUser).email;
             user.message = JSON.parse(savedUser).message;
        };
    }; 
};



function onFormsInput(event) {
    user.email = event.currentTarget.elements.email.value.trim();
    user.message = event.currentTarget.elements.message.value.trim();

    localStorage.setItem(localStorageKey, JSON.stringify(user));
};