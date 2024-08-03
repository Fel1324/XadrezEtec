const increasesBtnForm = document.querySelector("#increasesBtn");
const decreasesBtnForm = document.querySelector("#decreasesBtn");

const form = document.querySelector("#form");
const submit = document.querySelector("button[type=submit]");

increasesBtnForm.addEventListener("click", () => {
  let currentFontSizeForm = parseFloat(window.getComputedStyle(form, null).getPropertyValue("font-size"));
  let currentFontSizeSubmit = parseFloat(window.getComputedStyle(submit, null).getPropertyValue("font-size"));
  form.style.fontSize = (currentFontSizeForm + 2) + "px";
  submit.style.fontSize = (currentFontSizeSubmit + 2) + "px";
});

decreasesBtnForm.addEventListener("click", () => {
  let currentFontSizeForm = parseFloat(window.getComputedStyle(form, null).getPropertyValue("font-size"));
  let currentFontSizeSubmit = parseFloat(window.getComputedStyle(submit, null).getPropertyValue("font-size"));
  form.style.fontSize = (currentFontSizeForm + -2) + "px";
  submit.style.fontSize = (currentFontSizeSubmit + -2) + "px";
})