function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

function getShippingMessage(country, price, deliveryFee) {
  const totalCost = price + deliveryFee;
  return `Shipping to ${country} will cost ${totalCost} credits`;
}

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"

function getElementWidth(content,padding, border){
// Функція getElementWidth приймає три параметри: content, padding, border. Всі вони передаються у вигляді рядків з одиницями "px", наприклад "50px".
// Щоб знайти загальну ширину елемента, потрібно додати ширину контенту, падінгу та бордера.
// Оскільки параметри передані як рядки, спочатку потрібно отримати числові значення. Для цього можна використати parseFloat, який перетворює рядок на число, ігноруючи "px".
// Далі складаємо ці три значення і повертаємо результат.

const contentWidth = parseFloat(content); // отримуємо числове значення ширини контенту
const paddingWidth = parseFloat(padding); // отримуємо числове значення падінгу
const borderWidth = parseFloat(border);   // отримуємо числове значення бордера

const totalWidth = contentWidth + paddingWidth + borderWidth; // обчислюємо загальну ширину

return totalWidth; // повертаємо результат

}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
