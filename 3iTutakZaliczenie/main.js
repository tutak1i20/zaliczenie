const form1 = document.querySelector("#addingItems");
const userName = document.querySelector("#userName");
const userAge = document.querySelector("#userAge");
const displayAddingItems = document.querySelector("#displayAddingItems");
const btnAddingItems = document.querySelector("#btnAddingItems");

const form2 = document.querySelector("#calculations");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const sumSpan = document.querySelector("#sumSpan");
const divideSpan = document.querySelector("#divideSpan");
const btnSubmit = document.querySelector("#buttonSubmit");

form2.addEventListener("submit", (evt) => {
  evt.preventDefault();
  let liczba1 = num1.value;
  let liczba2 = num2.value;
  if (isNaN(parseInt(num1.value))) {
    sumSpan.innerHTML = "Podana wartość jest nieprawidłowa";
    divideSpan.innerHTML = "Podana wartość jest nieprawidłowa";
  } else if (num2.value == 0) {
    sumSpan.innerHTML = `${liczba1 + liczba2}`;
    divideSpan.innerHTML = "Wartość 2 liczby nie może być równa 0";
  } else {
    sumSpan.innerHTML = `${liczba1 + liczba2}`;
    divideSpan.innerHTML = liczba1 / liczba2;
  }
});

form1.addEventListener("submit", (evt) => {});
