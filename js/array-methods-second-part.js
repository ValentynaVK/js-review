// Уявімо, що у нас є список цін у вигляді рядків. Нам потрібно:

//  Розбити рядок на масив слів.
// Відфільтрувати слова, які мають більше 5 літер.
//  Об'єднати результат у рядок через кому.

// const text = "JavaScript is a powerful and flexible programming language";

// const result = text
//   .split(" ")
//   .filter((word) => word.length > 5)
//   .join(", ");
// console.log(result);
//=====================================================

//1. Є масив швидкостей автомобілів (у км/год). Вам потрібно реалізувати три функції, які аналізують ці швидкості.
// - Чи є хоч один автомобіль, що перевищує швидкість 130 км/год?
// - Чи всі автомобілі їдуть зі швидкістю не менше 60 км/год?
// - Знайти середню швидкість автомобілів.

// const speeds = [90, 110, 120, 140, 50, 75, 160];

// const isOver130 = speeds.some((speed) => speed > 130);
// console.log(isOver130);

//=======================

// const moreThan60 = speeds.every((speed) => speed >= 60);
// console.log(moreThan60);

//=======================
// const averageSpeed = speeds.reduce((sum, speed) => sum + speed) / speeds.length;
// console.log(averageSpeed);

//=================================================================

//2. Перевірити, чи всі числа у масиві кратні своєму індексу. Число з індексом нуль можна пропустити.

// Тестові випадки:
// console.log(allMultiplesOfIndex([10, 2, 4, 6, 12])); // true
// console.log(allMultiplesOfIndex([10, 3, 5, 9])); // false

//================================================================

//3. Група людей заблукала у лісі і намагається вижити . У них є запаси їжі (кількість днів, на які вистачить їжі для кожного). Нам потрібно:
// - Перевірити, чи є хоча б одна людина, у якої їжі вистачить на більше ніж 30 днів.
// - Знайти загальну кількість днів запасу їжі для всієї групи.
// - Видалити всіх, у кого запас менший за 5 днів (вони не вижили)

// const foodSupplies = [20, 5, 50, 12, 8, 30, 3, 40, 25, 7];

// const longTermSupply = foodSupplies.some((days) => days > 30);
// console.log(longTermSupply);

//=====================

// const totalFood = foodSupplies.reduce((sum, food) => sum + food, 0);
// console.log(totalFood);

//=====================

// const survivors = foodSupplies.filter((days) => days >= 5);
// console.log(survivors);

//==================================================================
//4. Уявімо, що у нас є список партій між шахістами. Ми хочемо проаналізувати результати та зробити кілька висновків:
// - Перевірити, чи була хоча б одна нічия.
// - Переконатися, що всі партії мали результат (тобто не було скасованих ігор).
// - Порахувати кількість перемог білих та чорних.
// - Скласти список унікальних гравців, які брали участь у турнірі.
// - Створити масив з тими гравцями, хто хоча б один раз вигравав.

// const games = [
//   ["Alice", "Bob", "white"], // Alice виграла
//   ["Charlie", "David", "black"], // David виграв
//   ["Eve", "Frank", "draw"], // Нічия
//   ["Alice", "Charlie", "white"], // Alice виграла
//   ["Bob", "Eve", "black"], // Eve виграла
//   ["David", "Frank", null], // гра була скасована
//   ["Alice", "Eve", "white"], // Alice виграла
// ];

// const draw = games.some(([, , result]) => result === "draw");

// const allGamesPlayed = games.every(([, , result]) => result !== null);

// let whiteWins = 0;
// let blackWins = 0;

// const winners = new Set();
// const players = new Set();

// for (const [white, black, result] of games) {
//   winners.add(white);
//   players.add(black);

//   if (result === "white") {
//     whiteWins++;
//     winners.add(white);
//   } else if (result === "black") {
//     blackWins++;
//     winners.add(black);
//   }
// }
// const uniquePlayers = Array.from(players);
// const playersWithWins = Array.from(winners);

// console.log(draw);
// console.log(allGamesPlayed);
// console.log(whiteWins);
// console.log(blackWins);
// console.log(winners);
// console.log(players);
// console.log(uniquePlayers);
// console.log(playersWithWins);

//=========================================================================================

//5. Є дані про результати бігових змагань у вигляді одного масиву. Кожен елемент масиву — це рядок, що містить ім'я учасника та його час у секундах, розділені двокрапкою.  Потрібно обробити ці дані за допомогою методів масивів.
// - Розбити рядки на окремі елементи - отримати масив, кожен елемент якого є масивом з двох елементів: ім'я та числове значення часу.
// - Знайти найшвидший час.
// - Перевірити, чи всі учасники показали результат менше 15 секунд.
// - Перевірити, чи хтось пробіг швидше 11 секунд.
// - Сформувати фінальний рядок ТОП-3 учасників. Використати slice і join, щоб створити рядок типу *"1. Grace (10.5s), 2. Charlie (11.8s), 3. Alice (12.4s)"*.

// const results = [
//   "Hank:16.3",
//   "David:14.1",
//   "Alice:12.4",
//   "Bob:15.2",
//   "Charlie:11.8",
//   "Eve:13.5",
//   "Frank:12.9",
//   "Grace:10.5",
// ];

// const parsedResults = results.map((item) => {
//   const [name, time] = item.split(":");
//   return [name, parseFloat(time)];
// });

// const bestTime = Math.min(...parsedResults.map(([_, time]) => time));
// const allUnderFifteen = parsedResults.every(([_, time]) => time < 15);
// const underEleven = parsedResults.some(([_, time]) => time < 11);

// const topThree = parsedResults
//   .sort((a, b) => a[1] - b[1])
//   .slice(0, 3)
//   .map(([name, time], index) => `${index + 1}. ${name} (${time}s)`)
//   .join(", ");

// console.log(parsedResults);
// console.log(bestTime);
// console.log(allUnderFifteen);
// console.log(underEleven);
// console.log(topThree);
