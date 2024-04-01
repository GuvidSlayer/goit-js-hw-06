const categoriesList = document.getElementById("categories");
const categoriesItems = categoriesList.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItems.length}\n`);

categoriesItems.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const elements = category.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elements}\n`);
});
