//Розглянути наступні функції і визначити, які з них є чистими, а які ні.

//  Функція 1(чиста)
// function multiply(a, b) {
//   return a * b;
// }

// Функція 2(змінює let)
// let counter = 0;
// function increment() {
//   counter++;
//   return counter;
// }

// Функція 3(name зміннюється)
// function formatMessage(name) {
//   console.log(`Hello, ${name}!`);
//   return `Hello, ${name}!`;
// }

// Функція 4(змінює вміст масиву)
// function addItemToArray(arr, item) {
//   arr.push(item);
//   return arr;
// }

//  Функція 5(змінює вміст масиву)
// function addToCart(cart, item) {
//   return [...cart, item];
// }

//============================================================================================================

//2. Є список напоїв. Потрібно вивести у консоль для кожного елемента масиву його значення у верхньому регістрі. Розвʼязати задачу двома способами:
//- за допомогою циклу for;
//- за допомогою метода forEach.

// const drinksMenu = ["espresso", "cappuccino", "latte", "americano"];

// for (let i = 0; i < drinksMenu.length; i++) {
//   console.log(drinksMenu[i].toUpperCase());
// }

// drinksMenu.forEach((drink) => {
//   console.log(drink.toUpperCase());
// });

//===================================================================================================================

//3.На основі попереднього масиву створити новий масив updatedDrinksMenu, у якому всі елементи будуть написані у верхньому регістрі.

// let updatedDrinksMenu = drinksMenu.map((drink) => drink.toUpperCase());
// console.log(updatedDrinksMenu);

// const drinksMenu = [
//   ["espresso", "cappuccino", "latte", "americano"],
//   ["coca-cola", "fanta"],
// ];

//4.На основі масиву drinksMenu створити новий масив flatDrinksMenu, елементами якого будуть назви напоїв:

// const flatDrinksMenu = drinksMenu.flatMap((drinks) => drinks);
// console.log(flatDrinksMenu);

//=================================================================================================================

//5.Відфільтрувати лише ті значення, які мають тип string:
// const data = [
//   42,
//   17,
//   8,
//   99,
//   5,
//   100,
//   3,
//   "apple",
//   "banana",
//   "cherry",
//   true,
//   false,
//   true,
// ];

// const stringValues = data.filter((item) => typeof item === "string");
// console.log(stringValues);

//=========================================================================================================

//6.Знайти перше число, яке більше за 40. Знайти всі числа, які більше за 40.
// const numbers = [10, 20, 30, 40, 50, 60, 70];

// const newNumber = numbers.filter((number) => number > 40);
// console.log(newNumber);

//===========================================================================================================

//7.Знайти індекс числа 100:
// const numbers = [10, 20, 30, 40, 50, 100, 200];
// const elementIndex = numbers.findIndex((index) => index === 100);
// console.log(elementIndex);

//==========================================================================================================

//8.Є масив книг, де кожна книга містить назву, жанр, кількість сторінок та рік публікації.
// const books = [
//   ["The Great Gatsby", "Fiction", 180, 1925],
//   ["Harry Potter and the Sorcerer's Stone", "Fantasy", 309, 1997],
//   ["To Kill a Mockingbird", "Fiction", 281, 1960],
//   ["1984", "Dystopian", 328, 1949],
//   ["The Hobbit", "Fantasy", 310, 1937],
//   ["Moby-Dick", "Adventure", 635, 1851],
//   ["War and Peace", "Historical Fiction", 1225, 1869],
// ];

//============
// let totalPage = 0;

// books.forEach((book) => (totalPage += book[2]));
// console.log(totalPage);

//=======================

// const booksTitles = books.map((book) => book[0]);
// console.log(booksTitles);

//======================

// const largeBooks = books.filter((book) => book[2] > 300);
// console.log(largeBooks);

//======================
// const bookAfter = books.find((book) => book[3] > 1950);
// console.log(bookAfter);

//======================

// const fantasyIndex = books.findIndex((book) => book[1] === "Fantasy");
// console.log(fantasyIndex);

//=====================================================================================================

//9.Є масив відповідей 1 (Так) та 0 (Ні).

// const votes = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0];

// const totalVotes = votes.length;
// console.log(totalVotes);

//=======================

// const yesVotes = votes.filter((vote) => vote === 1);
// console.log(yesVotes);

//=====================

// const imageVotes = votes.map((vote) => (vote === 1 ? "✅" : "❌"));
// console.log(imageVotes);

//========================================================================================================

//10.Масив orders складається з цін замовлень у доларах.

// const orders = [120, 75, 200, 99, 15, 180, 30];

// let total = orders.reduce((acc, amount) => acc + amount, 0);
// console.log(total);
//===================

// const maxOrder = orders.reduce((max, amount) => (amount > max ? amount : max));
// console.log(maxOrder);

//==================

// const priceyOrders = orders.filter((amount) => amount > 100);
// console.log(priceyOrders);

//==================

// const orderInEuro = orders.map((amount) => amount * 0.92);
// console.log(orderInEuro);
