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
// const tags = ["HTML", "CSS", "JavaScript", "React"];

// const indexToRemove = 2;
// const tagsCopy = tags.slice(0, indexToRemove);
// const secondCopiedTags = tags.slice(indexToRemove + 1);
// // const updatedTags = tagsCopy.concat(secondCopiedTags);
// const updatedTags = [...tagsCopy, ...secondCopiedTags];

// console.log(tags); // ["HTML", "CSS", "JavaScript", "React"]
// console.log(updatedTags); // ["HTML", "JavaScript", "React"]

// ========================================
// const group1 = ["Андрій", "Марія"];
// const group2 = ["Олег", "Світлана"];
// const newGroup = [...group1, ...group2];
// console.log(newGroup);
// // =====================
// const products = [
//   "Телефон",
//   "Ноутбук",
//   "Планшет",
//   "Смарт-годинник",
//   "Телевізор",
// ];

// const newList = products.slice(0, 3);

// console.log(newList); // ["Телефон", "Ноутбук", "Планшет"]
// =====================
// const articles = [
//   "How to use JavaScript",
//   "React Basics - DRAFT",
//   "Understanding Closures",
//   "Async/Await in Depth - Draft",
//   "Frontend Performance Optimization",
// ];

// const updatedArticles = articles
//   .filter((article) => {
//     return !article.toLowerCase().includes("draft");
//   })
//   .map((article) => {
//     return article + "-published";
//   });

// console.log(updatedArticles);

// Очікуваний результат:
// ["How to use JavaScript - Published",
// "Understanding Closures - Published",
// "Frontend Performance Optimization - Published"]\
// =============================
// - Створити функцію, яка приймає масив тегів та необмежену кількість нових тегів.
// - Повернути новий масив, у якому старі та нові теги об'єднані.
// - Переконатись, що вихідний масив не змінився.
// const tags = ["JavaScript", "React"];

// // Написати тут функцію addTags
// function addTags(oldTags, ...newTags) {
//   return [...oldTags, ...newTags];
// }

// const newTags = addTags(tags, "Next.js", "TypeScript", "Tailwind");

// console.log(tags); // ["JavaScript", "React"]
// console.log(newTags); // ["JavaScript", "React", "Next.js", "TypeScript", "Tailwind"]

// // ===========================
// //- Написати функцію, яка приймає масив і число `N`.
// // - Функція має повертати два масиви:
// //     - Перший містить перші N елементів.
// //     - Другий містить решту.
// const items = ["A", "B", "C", "D", "E", "F"];

// // Написати тут функцію splitArray
// function splitArray(array, n) {
//   const firstPart = array.slice(0, n);
//   const secondPart = array.slice(n);
//   return [firstPart, secondPart];
// }

// const [firstPage, secondPage] = splitArray(items, 3);

// console.log(firstPage); // ["A", "B", "C"]
// console.log(secondPage); // ["D", "E", "F"]

// ============================

// const formTemplate = {
//   title: undefined,
//   description: "Help us improve our service",
//   questions: [
//     "How satisfied are you with our product?",
//     "Would you recommend us to others?",
//     "Any suggestions for improvement?",
//   ],
// };

// const newFormTemplate = JSON.parse(JSON.stringify(formTemplate));
// // newFormTemplate.title = "New Title";
// newFormTemplate.questions[0] = "New Question";

// console.log(formTemplate);
// console.log(newFormTemplate);

// const newFormTemplate = structuredClone(formTemplate);
// newFormTemplate.questions[0] = "new Question";
// console.log(newFormTemplate);
// console.log(formTemplate);
// =======================
// Є об'єкт `test`, який містить масив питань, кожне з яких має варіанти відповідей.

// Зробіть незалежну копію тесту двома способами. 

// Спробуйте замінити значення `title` на `undefined` і побачити як це вплине на результат.

// Після редагування варіантів відповідей в оригіналі копія не має змінюватися.
// const test = {
//   title: "JS Basics",
//   questions: [
//     {
//       text: "Які ключові слова використовуються для оголошення змінної",
//       options: ["const", "let", "var"],
//     },
//   ],
// };
// const copy1 = JSON.parse(JSON.stringify(test));
// const copy2 = structuredClone(test);

// test.title = undefined;
// test.questions[0].options.push("function");

// console.log(test);
// console.log(copy1);
// console.log(copy2);

// ====================
// - Створити функцію `createDraft(document)`, яка створює повністю незалежну копію документа.
// - Видалити з копії весь контент з типом ****`image` — це буде "текстова" версія документа.
// - Змінити `title`, додавши до нього префікс `'Чернетка: '`.
// - Залишити лише ті `tags`, які НЕ містять слова `'важливо'`
// - У масиві `content` до `value` кожного елемента додати префікс у вигляді емоджі 📝
// - Вивести всі типи контенту, які є у масиві `content` без повторень
// - Порахувати кількість властивостей у документі (має бути 4 - title, author, tags, content)
// - Вивести у консоль у вигляді масиву значення усіх ключів документа.
// const document = {
//   title: "Щотижневий звіт",
//   author: "Olena",
//   tags: ["робота", "звіт", "важливо"],
//   content: [
//     { id: 1, type: "text", value: "Загальний прогрес команди" },
//     { id: 2, type: "image", src: "team.jpg" },
//     { id: 3, type: "text", value: "Наступні кроки" },
//     { id: 4, type: "code", value: "console.log('hello');" },
//   ],
// };

// function createDraft() {
//   const draft = structuredClone(document);

//   draft.content = draft.content.filter(item => item.type !== "image");

//   draft.title = "Чернетка: " + draft.title;

//   draft.tags = draft.tags.filter(tag => !tag.toLowerCase().includes("важливо"));

//   draft.content = draft.content.map(item => {
//     if ("value" in item) {
//       return { ...item, value: "📝 " + item.value };
//     }
//     return item;
//   });

//   const uniqueTypes = [...new Set(draft.content.map(item => item.type))];
//   console.log(uniqueTypes);

//   const valuesArray = Object.values(draft);
//   console.log( valuesArray);

//   const allKeys= Object.keys(draft)
//   console.log(allKeys);
  
  

//   return draft;
// }

// const draftDoc = createDraft(document);
// console.log( draftDoc);
