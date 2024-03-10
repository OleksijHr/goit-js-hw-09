const form = document.querySelector(".feedback-form");
console.log(form);

const input = document.querySelector("[type='email'");
console.log(input);

const submitBtn = document.querySelector("[type='submit'");
console.log(submitBtn);

form.addEventListener("submit", submitHandler);


function submitHandler(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email;
    const message = event.currentTarget.elements.message;

    if (email.value === '' && message.value === '') {
        alert("Будь ласка введіть Email")
    } else {
        const feedback = {};

        feedback.email = email.value.trim();
        feedback.message = message.value.trim();

        console.log(feedback);

        event.currentTarget.reset();
    }
} 

