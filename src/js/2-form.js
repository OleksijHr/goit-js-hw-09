const localStorageKey = "feedback-form-state";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector("[type='email'");
const feedbackMessage = document.querySelector("textarea");



const user = {
    email: "",
    message: "",
};

form.addEventListener("input", onTextareaInput);
form.addEventListener("submit", handleSubmit);

populateTextarea();


function handleSubmit(event) {
    event.preventDefault();

    console.log(user);

    localStorage.removeItem(localStorageKey);
    event.target.reset();
}


function populateTextarea(event) {
    const savedEmail = localStorage.getItem(localStorageKey, user.email);
    const savedMessage = localStorage.getItem(localStorageKey, user.message);

    if (savedEmail && savedMessage) {
        emailInput.value = JSON.parse(savedEmail).email;
        feedbackMessage.value = JSON.parse(savedMessage).message;
    }
}



function onTextareaInput(event) {
    user.email = event.currentTarget.elements.email.value;
    user.message = event.currentTarget.elements.message.value;

    localStorage.setItem(localStorageKey, JSON.stringify(user));
}