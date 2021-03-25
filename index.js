/*
Нужна форма с двумя полями.
в одном поле вводится количество углеводов на 100 грамм.
В другое поле - количество хлебных единиц.
При нажатии на кнопку все считается




*/

const carbohydrate = 10;
const unit = 2;

function calcCarbo(carbohydrate, unit) {
  const carboSum = 100 * 10 / carbohydrate * unit;
  return carboSum;
}

calcCarbo(carbohydrate, unit);
