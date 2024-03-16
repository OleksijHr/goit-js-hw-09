// Виконуй це завдання у файлах 2-form.html і 2-form.js. Розбий його на декілька підзавдань:

// Використовуючи делегуваня, відстежуй на формі подію input і щоразу записуй у локальне сховище об'єкт з полями email і message, 
// у яких зберігай поточні значення полів форми.Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, то заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищай сховище і поля форми, а також виводь у консоль об'єкт з полями email,
//  message та їхніми поточними значеннями.



const form = document.querySelector(".feedback-form");
const input = document.querySelector("[type='email']");
const submitBtn = document.querySelector("[type='submit']");
const email = form.elements.email;
const textarea = form.elements.message;
const localStorageKey = "feedback-form-state";

// const user = {
//     email: "",
//     message: "",
// }

email.value = localStorage.getItem(localStorageKey) ?? "";
textarea.value = localStorage.getItem(localStorageKey) ?? "";

form.addEventListener("input", handlerInput);
form.addEventListener("submit", handlerSubmit);

function handlerInput(event) {
    localStorage.setItem(localStorageKey, event.target.value);

};

function handlerSubmit(event) {
    event.preventDefault();
    console.log(event.target.elements.email.value);
    console.log(event.target.elements.message.value);

    localStorage.removeItem(localStorageKey);

    form.requestFullscreen();
};


    // const email = event.currentTarget.elements.email;
    // const message = event.currentTarget.elements.message;

    // if (email.value === '' && message.value === '') {
    //     alert("Будь ласка заповніть усі обов'язкові поля")
    // } else {
    //     const feedback = {};

    //     feedback.email = email.value.trim();
    //     feedback.message = message.value.trim();

    //     console.log(feedback);

        // event.currentTarget.reset();
    // }
// } 

console.log(localStorage);


