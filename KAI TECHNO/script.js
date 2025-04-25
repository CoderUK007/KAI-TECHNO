

const recipes = [
    {
        title: "Vegetable Stir Fry",
        ingredients: ["carrot", "broccoli", "bell pepper"],
        instructions: "Stir fry the vegetables in a pan with oil and soy sauce.",
        image: "images/vegetable_stir_fry.jpg" // Add your image path here
    },
    {
        title: "Pasta Primavera",
        ingredients: ["pasta", "tomato", "bell pepper", "zucchini"],
        instructions: "Cook pasta and toss with sautéed vegetables and olive oil.",
        image: "images/pasta_primavera.jpg" // Add your image path here
    },
    {
        title: "Omelette",
        ingredients: ["egg", "cheese", "spinach"],
        instructions: "Beat eggs, pour into a pan, add cheese and spinach, cook until set.",
        image: "images/omelette.jpg" // Add your image path here
    }
];

document.getElementById("findRecipes").addEventListener("click", function() {
    const input = document.getElementById("ingredients").value;
    const ingredientList = input.split(",").map(ingredient => ingredient.trim().toLowerCase());
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = ""; // Clear previous results

    recipes.forEach(recipe => {
        const hasAllIngredients = recipe.ingredients.every(ingredient => ingredientList.includes(ingredient));
        if (hasAllIngredients) {
            const recipeDiv = document.createElement("div");
            recipeDiv.classList.add("recipe");
            recipeDiv.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <div>
                    <h3>${recipe.title}</h3>
                    <p>${recipe.instructions}</p>
                </div>
            `;
            recipeList.appendChild(recipeDiv);
        }
    });

    if (recipeList.innerHTML === "") {
        recipeList.innerHTML = "<p>No recipes found with the given ingredients.</p>";
    }
});
