/*
Нужна форма с двумя полями.
В одном поле вводится количество углеводов на 100 грамм.
В другое поле - количество хлебных единиц.
При нажатии на кнопку все считается

*/
const formElement = document.querySelector('.form');
const calcResult = formElement.querySelector('.form__result');
const inputCarbs = formElement.querySelector('.form__input-carbs');
const inputUnit = formElement.querySelector('.form__input-unit');

formElement.addEventListener('submit', formSubmitHandler);


function calcCarbs(carbs, unit) {
  carbs = inputCarbs.value;
  unit = inputUnit.value;
  const carbsSum = (100 * 10 / carbs * unit).toFixed(1);
  return calcResult.textContent = carbsSum;
}


function formSubmitHandler(e) {
  e.preventDefault();
  calcCarbs();
}
