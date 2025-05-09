// const items = [
//   "сонцезахисний крем",
//   "купальник",
//   "окуляри",
//   "капелюх",
//   "рюкзак",
// ];

// const list = document.createElement("ol");

// items.forEach((item) => {
//   const li = document.createElement("li");
//   li.textContent = item;
//   list.appendChild(li);
// });

// console.log(list.outerHTML);

// document.body.appendChild(list);

// const animals = ["собака", "кіт", "слон", "бджола"];

// const sortedAnimals = animals.toSorted((a, b) => b.localeCompare(a));

// console.log(sortedAnimals);
// console.log(animals);

// const numbers = [15, 3, 22, 1, 9];

// const sortedNumbers = numbers.toSorted((a, b) => a - b);

// console.log(sortedNumbers);
const items = [
  { id: 3, title: "Третій", category: "B", priority: 2 },
  { id: 1, title: "Перший", category: "A", priority: 1 },
  { id: 2, title: "Другий", category: "C", priority: 3 },
  { id: 4, title: "Четвертий", category: "A", priority: 2 },
  { id: 5, title: "П’ятий", category: "B", priority: 1 },
];

const sortedItems = items.toSorted((a, b) => a.priority - b.priority);

console.log(sortedItems);
