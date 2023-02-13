const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("#ingredients");
const list = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.classList.add("item");
  liEl.textContent = ingredient;
  return liEl;
  console.log(liEl);
});
listEl.append(...list);



// const list = ingredients.forEach(ingredient => {
//   const liEl = document.createElement("li");
//   liEl.classList.add("item");
//   liEl.textContent = ingredient;

//   console.log(liEl);

//   // listEl.append(liEl);
// });