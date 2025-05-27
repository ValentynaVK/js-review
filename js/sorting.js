// const animals = ["собака", "кіт", "слон", "бджола"];

// const sortedAnimals = animals.toSorted((a, b) => b.localeCompare(a));

// console.log(sortedAnimals);
// console.log(animals);

// const numbers = [15, 3, 22, 1, 9];

// const sortedNumbers = numbers.toSorted((a, b) => a - b);

// console.log(sortedNumbers);
// const items = [
//   { id: 3, title: "Третій", category: "B", priority: 2 },
//   { id: 1, title: "Перший", category: "A", priority: 1 },
//   { id: 2, title: "Другий", category: "C", priority: 3 },
//   { id: 4, title: "Четвертий", category: "A", priority: 2 },
//   { id: 5, title: "П’ятий", category: "B", priority: 1 },
// ];

// const sortedItems = items.toSorted((a, b) => a.priority - b.priority);

// console.log(sortedItems);
//======================================HW===================================================
// Відсортувати числа за спаданням.

// const numbers = [4, 15, 2, 37, 10];

// const sortedNums = numbers.toSorted((a, b) => b - a);

// console.log(sortedNums);

//===================================
//Відсортувати слова за кількістю букв (від коротших до довших).

// const words = ["elephant", "dog", "hippopotamus", "cat", "giraffe"];

// const sortedWords = words.toSorted((a, b) => a.length - b.length);

// console.log(sortedWords);

//====================================
//Є масив об'єктів з інформацією про людей. Відсортувати їх за віком (від молодших до старших).

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 19 },
//   { name: "Charlie", age: 32 },
//   { name: "David", age: 23 },
// ];

// const sortByAge = people.toSorted((a, b) => a.age - b.age);

// console.log(sortByAge);

//===================================
//Є список пріоритетів: high, medium, low. Відсортувати задачі за пріоритетом (high → medium → low).
// const tasks = [
//   { title: "Task 1", priority: "low" },
//   { title: "Task 2", priority: "high" },
//   { title: "Task 3", priority: "medium" },
//   { title: "Task 4", priority: "low" },
//   { title: "Task 5", priority: "high" },
// ];

// const priority = { high: 1, medium: 2, low: 3 };

// const sortedTasks = tasks.toSorted(
//   (a, b) => priority[a.priority] - priority[b.priority]
// );

// console.log(sortedTasks);
