import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */const t=document.querySelector(".feedback-form");document.querySelector("[type='email']");document.querySelector("[type='submit']");const l=t.elements.email,a=t.elements.message,o="feedback-form-state";l.value=localStorage.getItem(o)??"";a.value=localStorage.getItem(o)??"";t.addEventListener("input",r);t.addEventListener("submit",m);function r(e){localStorage.setItem(o,e.target.value)}function m(e){e.preventDefault(),console.log(e.target.elements.email.value),console.log(e.target.elements.message.value),localStorage.removeItem(o),t.requestFullscreen()}console.log(localStorage);
//# sourceMappingURL=commonHelpers2.js.map
