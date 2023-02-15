const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");
const markup = images
  .map((image) => {
    return `<li><img src="${image.url}" alt="${image.alt}" width="500"></li>`;
  })
  .join("");
listEl.insertAdjacentHTML("afterbegin", markup);
listEl.style.display = "flex";
listEl.style.flexDirection = "column";
listEl.style.margin = "-20px";
listEl.style.listStyleType = "none";

const listImageEl = document.querySelectorAll("img");

listImageEl.forEach((image) => {
  image.style.borderRadius = "15px";
  image.style.display = "block";
});

const listItemEl = document.querySelectorAll("li");
listItemEl.forEach((item) => {
  item.style.margin = "20px";
});
