/* 
GoIT - JS Homework #1 
task - 1
*/
​
let itemName = 'Генератор защитного поля';
let itemPrice = 1000;
console.log(`Выбран ${itemName}, цена за штуку ${itemPrice} кредитов`);
​
itemPrice = 2000;
console.log(`Выбран ${itemName}, цена за штуку ${itemPrice} кредитов`);
​
/* 
GoIT - JS Homework #1 
task - 2
*/
​
const total = 100;
const ordered = 150;
​
if (total < ordered) {
  alert('На складе недостаточно твоаров!');
} else {
  alert('Заказ оформлен, с вами свяжется менеджер');
}
​
/* 
GoIT - JS Homework #1 
task - 3
*/
​
let message;
const ADMIN_PASSWORD = 'jqueryismyjam';
const admLogin = prompt('Enter the login');
console.log('login =', admLogin);
​
if (admLogin === 'Admin') {
  const password = prompt('Enter the password');
  console.log('password =', password);
  if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert(message);
  } else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
  }
} else if (admLogin === null) {
  message = 'Отменено пользователем';
  alert(message);
}
​
/* 
GoIT - JS Homework #1 
task - 4
*/
​
const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
​
let getDroids = prompt('How many droids you would like to buy?');
if (getDroids === null) {
  alert('Отменено пользователем!');
} else if (getDroids !== null) {
  totalPrice = getDroids * pricePerDroid;
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
  } else {
    let result = credits - totalPrice;
    alert(`Вы купили ${getDroids} дроидов, на счету осталось ${result} кредитов.`);
  }
}
​
/* 
GoIT - JS Homework #1 
task - 5
*/
​
let cost;
let country = prompt('Выберите страну, куда необходимо выполнить доставку');
​
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
​
country = capitalizeFirstLetter(country);
​
switch (country) {
  case 'Китай':
    cost = 100;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
​
  case 'Чили':
    cost = 250;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
​
  case 'Австралия':
    cost = 170;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
​
  case 'Индия':
    cost = 80;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
​
  case 'Ямайка':
    cost = 120;
    alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
​
  default:
    alert('В вашей стране доставка не доступна');
}
​
/* 
GoIT - JS Homework #1 
task - 6
*/
​
let input;
let total = 0;
​
while (true) {
  input = prompt('Enter the number');
  if (input === null) {
    break;
  } else if (typeof input === 'string') {
    Number.isNaN(input);
    if (isNaN(input) === true) {
      alert('Было введено не число, попробуйте еще раз');
    } else {
      total += +input;
    }
  }
}
alert(`Summary equals to ${total}`);