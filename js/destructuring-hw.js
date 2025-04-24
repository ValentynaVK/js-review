// 1.Є масив з товарами. Перебрати елементи масиву і вивести у консоль назву товару, ціну і бренд у форматі [Name] бренду [Brand] коштує [Price]$. Використати деструктуризацію.
// const products = [
//   { name: "Laptop", price: 1200, brand: "HP" },
//   { name: "Phone", price: 800, brand: "Samsung" },
//   { name: "Tablet", price: 400, brand: "Apple" },
// ];

// products.forEach(({ name, price, brand }) => {
//   console.log(`${name} бренду ${brand} коштує ${price}$`);
// });

//==================================================================================

//2.Створити змінні first і third, пропустивши другий елемент масиву:

// const numbers = [1, 2, 3, 4, 5];

// const [first, , third] = numbers;
// console.log(first);
// console.log(third);

//====================================================================================

//3.Створити змінну first і масив others, який буде складатись з решти елементів масиву:
// const fruits = ["яблуко", "банан", "апельсин", "груша", "ківі"];

// const [first, ...others] = fruits;
// console.log(first);
// console.log(others);

//===================================================================================

//4. Створити функцію getProductInfo, яка приймає об'єкт product як параметр і за допомогою деструктуризації витягує:
// - name (назву товару)
// - price (ціну товару)
// - manufacturer (виробника)

//     Функція має повертати рядок "[productName] коштує [productPrice]$, виробник: [productManufacturer]”.

// const product = {
//   name: "Laptop",
//   price: 1200,
//   manufacturer: "TechCorp",
// };

// function getProductInfo({ name, price, manufacturer }) {
//   return `${name} коштує ${price}$, виробник: ${manufacturer}`;
// }

// console.log(getProductInfo(product));

//=======================================================================================

//5.За допомогою деструктуризації створити нові змінні, які будуть зберігати значення з масиву - 'a', 'c', 'e’.
// const nestedArray = ["a", ["b", "c"], ["d", ["e", "f"]]];
// const [a, [, c], [, [e]]] = nestedArray;
// console.log(a);
// console.log(c);
// console.log(e);

//=======================================================================================

//6.Створити змінні userName, userAge з об'єкта (перейменувавши оригінальні властивості)
// const user = {
//   name: "Марія",
//   age: 25,
//   email: "maria@example.com",
// };

// const { name: userName, age: userAge } = user;

// console.log(userName);
// console.log(userAge);

//======================================================================================

//7.Створити змінні name, role і level, де для level використати значення за замовчуванням "junior".
// const employee = {
//   name: "Петро",
//   role: "frontend",
// };

// const { name, role, level = "junior" } = employee;

// console.log(name);
// console.log(role);
// console.log(level);

//======================================================================================

//8.Створити змінні id, title, pages і змінну otherProps, яка міститиме решту властивостей.
// const book = {
//   id: 123,
//   title: "JavaScript: Повне керівництво",
//   author: "Девід Фленаган",
//   year: 2020,
//   pages: 720,
//   publisher: "O'Reilly",
// };

// const { id, title, pages, ...otherProps } = book;

// console.log(id);
// console.log(title);
// console.log(pages);
// console.log(otherProps);

//====================================================================================

//9.Отримати змінні firstName, city і country.

const customer = {
  id: 4321,
  fullName: {
    firstName: "Анна",
    lastName: "Коваленко"
  },
  address: {
    street: "Шевченка",
    city: "Львів"
    country: "Україна"
  }
};

const {
  fullName: {firstName}
  address: {city, country}

} = customer;

console.log(firstName);
console.log(city);
cobsole.log(country);
