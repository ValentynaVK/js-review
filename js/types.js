// const typeOfNan = typeof NaN;
// console.log(typeOfNan);
// ==============================

// const vacationThings = ["sunscreen", "hat", "sunglasses"];

// const myBag = [...vacationThings];

// // додаємо до myBag новий предмет
// myBag.push("swimsuit");

// console.log(vacationThings);

// ===================================
// const shoppingList = ["Молоко", "Хліб", "Яйця"];
// const copiedList = shoppingList.slice(0, 2);

// copiedList.push("Печиво");

// // result -> ["Молоко", "Хліб", "Яйця"]
// console.log("shoppingList", shoppingList);

// // result -> ["Молоко", "Хліб", "Яйця", "Печиво"]
// console.log("copiedList", copiedList);

// ===================================
const tags = ["HTML", "CSS", "JavaScript", "React"];

const indexToRemove = 2;
const tagsCopy = tags.slice(0, indexToRemove);
const secondCopiedTags = tags.slice(indexToRemove + 1);
// const updatedTags = tagsCopy.concat(secondCopiedTags);
const updatedTags = [...tagsCopy, ...secondCopiedTags];

console.log(tags); // ["HTML", "CSS", "JavaScript", "React"]
console.log(updatedTags); // ["HTML", "JavaScript", "React"]

// ========================================
const group1 = ["Андрій", "Марія"];
const group2 = ["Олег", "Світлана"];
const newGroup = [...group1, ...group2];
console.log(newGroup);
// =====================
const products = [
  "Телефон",
  "Ноутбук",
  "Планшет",
  "Смарт-годинник",
  "Телевізор",
];

const newList = products.slice(0, 3);

console.log(newList); // ["Телефон", "Ноутбук", "Планшет"]
// =====================
const articles = [
  "How to use JavaScript",
  "React Basics - DRAFT",
  "Understanding Closures",
  "Async/Await in Depth - Draft",
  "Frontend Performance Optimization",
];

const updatedArticles = articles
  .filter((article) => {
    return !article.toLowerCase().includes("draft");
  })
  .map((article) => {
    return article + "-published";
  });

console.log(updatedArticles);

// Очікуваний результат:
// ["How to use JavaScript - Published",
// "Understanding Closures - Published",
// "Frontend Performance Optimization - Published"]
