const items = [
  "сонцезахисний крем",
  "купальник",
  "окуляри",
  "капелюх",
  "рюкзак",
];

const list = document.createElement("ol");

items.forEach((item) => {
  const li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});

console.log(list.outerHTML);

document.body.appendChild(list);
