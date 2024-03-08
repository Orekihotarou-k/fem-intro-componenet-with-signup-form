// // get input elements
// const form = document.querySelector("form")
// const firstName = document.getElementById("firstName")
// const lastName = document.getElementById("lastName")
// const emailAddress = document.getElementById("emailAddress")
// const password = document.getElementById("password")
// const submitBtn = document.querySelector(".submit-button")

// // get other elements 
// const smallErrorMessage = document.querySelectorAll("small")
// const errorIcon = document.querySelectorAll(".errorIcon")

// // add event listener to the form 
// form.addEventListener("submit", e => {
//     e.preventDefault()

//         //  verify check if the inputs are empty
//         const inputs = [firstName, lastName, password]
//         inputs.forEach(input => {
//             if(input.value === "") {
//                 input.classList.add("error")
//                 smallErrorMessage.forEach(small => {
//                     small.classList.add("errorMessage")
//                 })
//                 errorIcon.forEach(icon => {
//                     icon.style.display = "block"
//                 })
//             } else {
//                 input.classList.remove("error")
//                 smallErrorMessage.forEach(small => {
//                     small.classList.remove("errorMessage")
//                 })
//                 errorIcon.forEach(icon => {
//                     icon.style.display = "none"
//                 })
//             }
//         }) 

//      // verify the email address
//      const emailInput = emailAddress.value
//      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
//      const emailError = document.querySelector(".emailError")
//      const isValid = emailRegex.test(emailInput)
//      if (isValid === false) {
//         emailError.classList.add("errorMessage")
//          emailError.style.display = "block"
//          emailAddress.classList.add("error")
//          emailAddress.placeholder = "email@example/com"
//      } else {
//          emailError.style.display = "none"
//          emailAddress.classList.remove("error")
//      }
// })

// get input elements
const form = document.querySelector("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailAddress = document.getElementById("emailAddress");
const password = document.getElementById("password");
const submitBtn = document.querySelector(".submit-button");

// get other elements
const smallErrorMessage = document.querySelectorAll("small");
const errorIcon = document.querySelectorAll(".errorIcon");
const emailError = document.querySelector(".emailError");

// add event listener to the form
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // verify if the inputs are empty
    const inputs = [firstName, lastName, password];
    inputs.forEach((input) => {
        const errorMessage = input.parentElement.querySelector("small");
        const errorIcon = input.parentElement.querySelector(".errorIcon");

        if (input.value === "") {
            input.classList.add("error");
            errorMessage.classList.add("errorMessage");
            errorIcon.style.display = "block";
        } else {
            input.classList.remove("error");
            errorMessage.classList.remove("errorMessage");
            errorIcon.style.display = "none";
        }
    });

    // verify the email address
    const emailInput = emailAddress.value;
    const emailErrorIcon = document.querySelector(".emailErrorIcon")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput)) {
        emailError.classList.add("errorMessage");
        emailError.style.display = "block";
        emailAddress.classList.add("error");
        emailErrorIcon.style.display = "block"
    } else {
        emailError.style.display = "none";
        emailAddress.classList.remove("error");
    }
});
