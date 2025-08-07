const recipes = [
  {
    title: "Palak Paneer",
    category: "veg",
    description: "Creamy spinach curry with paneer.",
    ingredients: ["Spinach", "Paneer", "Garlic", "Spices"],
    steps: "Blanch spinach, blend, cook with spices and paneer.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/palak-paneer-recipe.jpg"
  },
  {
    title: "Aloo Gobi",
    category: "veg",
    description: "Spiced potato and cauliflower dish.",
    ingredients: ["Potato", "Cauliflower", "Turmeric", "Cumin"],
    steps: "Sauté veggies with spices until tender.",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2014/12/Aloo-Gobi-Recipe.jpg"
  },
  {
    title: "Chole Masala",
    category: "veg",
    description: "Spicy chickpea curry.",
    ingredients: ["Chickpeas", "Onion", "Tomato", "Spices"],
    steps: "Cook chickpeas with onion-tomato gravy.",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/chole-recipe-1.jpg"
  },
  {
    title: "Vegetable Biryani",
    category: "veg",
    description: "Fragrant rice with mixed vegetables.",
    ingredients: ["Rice", "Carrot", "Beans", "Spices"],
    steps: "Layer cooked rice with spiced veggies and steam.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-biryani-recipe.jpg"
  },
  {
    title: "Paneer Tikka",
    category: "veg",
    description: "Grilled paneer cubes with spices.",
    ingredients: ["Paneer", "Yogurt", "Spices", "Capsicum"],
    steps: "Marinate paneer and grill with veggies.",
    image: "https://www.cookwithmanali.com/wp-content/uploads/2019/03/Paneer-Tikka-Recipe.jpg"
  },
  {
    title: "Matar Paneer",
    category: "veg",
    description: "Peas and paneer in tomato gravy.",
    ingredients: ["Paneer", "Peas", "Tomato", "Spices"],
    steps: "Cook peas and paneer in spiced tomato gravy.",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/matar-paneer-1.jpg"
  },
  {
    title: "Bhindi Masala",
    category: "veg",
    description: "Spiced okra stir-fry.",
    ingredients: ["Okra", "Onion", "Tomato", "Spices"],
    steps: "Sauté okra with onion and tomato.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/bhindi-masala.jpg"
  },
  {
    title: "Rajma",
    category: "veg",
    description: "Kidney beans curry.",
    ingredients: ["Rajma", "Onion", "Tomato", "Spices"],
    steps: "Cook soaked rajma in onion-tomato gravy.",
    image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/rajma-recipe-1.jpg"
  },
  {
    title: "Mix Veg Curry",
    category: "veg",
    description: "Assorted vegetables in curry.",
    ingredients: ["Carrot", "Beans", "Potato", "Spices"],
    steps: "Cook mixed veggies in spiced gravy.",
    image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/mixed-veg-curry.jpg"
  }
];

const recipeList = document.getElementById("recipe-list");
const searchInput = document.getElementById("search");
const filterButtons = document.querySelectorAll("button[data-filter]");
const modal = document.getElementById("recipe-modal");
const closeBtn = document.querySelector(".close-btn");

const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalIngredients = document.getElementById("modal-ingredients");
const modalSteps = document.getElementById("modal-steps");

function renderRecipes(list) {
  recipeList.innerHTML = "";
  list.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" />
      <div class="content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
      </div>
    `;
    card.addEventListener("click", () => showModal(recipe));
    recipeList.appendChild(card);
  });
}

function showModal(recipe) {
  modalImage.src = recipe.image;
  modalTitle.textContent = recipe.title;
  modalDescription.textContent = recipe.description;
  modalIngredients.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join("");
  modalSteps.textContent = recipe.steps;
  modal.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    let filtered = recipes;
    if (filter !== "all") {
      filtered = recipes.filter(r => r.category === filter);
    }
    renderRecipes(filtered);
  });
});

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  const filtered = recipes.filter(r => r.title.toLowerCase().includes(query));
  renderRecipes(filtered);
});

// Initial render
renderRecipes(recipes);
