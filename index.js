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
const formInput = formElement.querySelector('.form__input');
const formError = formElement.querySelector(`.${formInput.id}-error`);

formElement.addEventListener('submit', formSubmitHandler);


function calcCarbs(carbs, unit) {
  carbs = inputCarbs.value.replace(/,/, '.');
  unit = inputUnit.value.replace(/,/, '.');
  const carbsSum = (100 * 10 / carbs * unit).toFixed(1);
  return calcResult.textContent = carbsSum;
}


function formSubmitHandler(e) {
  e.preventDefault();
  calcCarbs();
}

const showInputError = (element, errorMessage) => {
  element.classList.add('form__input_type_error');
  formError.textContent = errorMessage;
  formError.classList.add('form__input-error_active');
};

const hideInputError = (element) => {
  element.classList.remove('form__input_type_error');
  formError.classList.remove('form__input-error_active');
  formError.textContent = '';
};

const isValid = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};

formElement.addEventListener('submit', function (evt) {
  evt.preventDefault();
});

formInput.addEventListener('input', isValid);


