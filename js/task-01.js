const itemEl = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${itemEl.length}`);

itemEl.forEach(item => {
    const h2El = item.querySelector("h2");
    const listEl = item.querySelectorAll("li");
    console.log(`Category: ${h2El.textContent}`);
    console.log(`Elements: ${listEl.length}`);
})




// const ulEl = categories.querySelector(`ul`);
// console.log(ulEl);


// const headingEl = document.querySelectorAll("h2");
// heading2El.classList.add(`category__name`);
// console.log(`Category: ${headingEl[0].textContent}`);

// for (const category of headingEl) {
//     // category.classList.add('category__name');
//     console.log(`Category: ${category.textContent}`);

//     // console.log(`Elements: ${category.children.length}`);
// };

// const listsEl = categories.querySelectorAll("ul");

// for (const element of listsEl) {
//     console.log(element.children.length);
// };

// const categoryEl = headingEl.map(category => category.classList.add('category__name'));

// headingEl[0].classList.add('category__name')

// console.log(`Category: ${headingEl[1].textContent}`);

// console.log(`Category: ${headingEl[2].textContent}`);