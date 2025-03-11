const recipes = [
    {
      id: 1,
      title: "Avocado Toast with Poached Eggs",
      description: "Start your day with this nutritious and delicious avocado toast topped with perfectly poached eggs.",
      image: "./images/Avocado Toast with a Poached Egg_ A Trendy Brunch Delight - exesrecipes_com.jpg",
      category: "breakfast",
      prepTime: "15 min",
      cookTime: "5 min",
      servings: 2,
      ingredients: [
        "2 slices of whole grain bread",
        "1 ripe avocado",
        "2 eggs",
        "1 tablespoon white vinegar",
        "Salt and pepper to taste",
        "Red pepper flakes (optional)",
        "Fresh herbs like cilantro or parsley (optional)",
      ],
      instructions: [
        "Toast the bread slices until golden and crispy.",
        "While the bread is toasting, mash the avocado in a bowl with a fork. Season with salt and pepper.",
        "For the poached eggs, bring a pot of water to a gentle simmer and add the vinegar.",
        "Crack each egg into a small bowl, then gently slide it into the simmering water.",
        "Cook for about 3-4 minutes for a runny yolk.",
        "Spread the mashed avocado on the toast slices.",
        "Using a slotted spoon, remove the poached eggs and place on top of the avocado toast.",
        "Season with salt, pepper, and red pepper flakes if desired. Garnish with fresh herbs.",
      ],
    },
    {
      id: 2,
      title: "Creamy Tomato Basil Pasta",
      description:
        "A comforting pasta dish with a rich tomato sauce and fresh basil that comes together in just 30 minutes.",
      image: "./images/Cherry Tomato Pasta.jpg",
      category: "dinner",
      prepTime: "10 min",
      cookTime: "20 min",
      servings: 4,
      ingredients: [
        "12 oz pasta (penne or spaghetti)",
        "2 tbsp olive oil",
        "3 cloves garlic, minced",
        "1 onion, finely chopped",
        "1 can (28 oz) crushed tomatoes",
        "1/2 cup heavy cream",
        "1/4 cup fresh basil leaves, torn",
        "1/2 cup grated Parmesan cheese",
        "Salt and pepper to taste",
        "Red pepper flakes (optional)",
      ],
      instructions: [
        "Cook pasta according to package instructions until al dente. Drain and set aside.",
        "In a large skillet, heat olive oil over medium heat. Add onions and cook until translucent, about 3-4 minutes.",
        "Add garlic and cook for another minute until fragrant.",
        "Pour in crushed tomatoes and simmer for 10 minutes.",
        "Reduce heat to low and stir in heavy cream. Simmer for 5 more minutes.",
        "Add cooked pasta to the sauce and toss to coat evenly.",
        "Stir in torn basil leaves and half of the Parmesan cheese.",
        "Season with salt, pepper, and red pepper flakes if desired.",
        "Serve hot, garnished with remaining Parmesan cheese and additional basil leaves.",
      ],
    },
    {
      id: 3,
      title: "Chocolate Chip Cookies",
      description: "Classic chocolate chip cookies with a perfect balance of chewy centers and crispy edges.",
      image: "./images/Chewy Chocolate Chip Cookies Recipe by Tasty.jpg",
      category: "dessert",
      prepTime: "15 min",
      cookTime: "12 min",
      servings: 24,
      ingredients: [
        "2 1/4 cups all-purpose flour",
        "1 tsp baking soda",
        "1 tsp salt",
        "1 cup unsalted butter, softened",
        "3/4 cup granulated sugar",
        "3/4 cup packed brown sugar",
        "2 large eggs",
        "2 tsp vanilla extract",
        "2 cups semi-sweet chocolate chips",
      ],
      instructions: [
        "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
        "In a small bowl, whisk together flour, baking soda, and salt.",
        "In a large bowl, beat butter, granulated sugar, and brown sugar until creamy.",
        "Add eggs one at a time, beating well after each addition. Stir in vanilla.",
        "Gradually beat in flour mixture until just combined.",
        "Stir in chocolate chips.",
        "Drop rounded tablespoons of dough onto prepared baking sheets.",
        "Bake for 9-11 minutes or until golden brown.",
        "Cool on baking sheets for 2 minutes, then transfer to wire racks to cool completely.",
      ],
    },
    {
      id: 4,
      title: "Mediterranean Quinoa Salad",
      description: "A refreshing and nutritious salad packed with Mediterranean flavors and protein-rich quinoa.",
      image: "./images/Mediterranean Quinoa Salad.jpg",
      category: "lunch",
      prepTime: "15 min",
      cookTime: "15 min",
      servings: 4,
      ingredients: [
        "1 cup quinoa, rinsed",
        "2 cups water or vegetable broth",
        "1 cucumber, diced",
        "1 pint cherry tomatoes, halved",
        "1 red bell pepper, diced",
        "1/2 red onion, finely chopped",
        "1/2 cup kalamata olives, pitted and sliced",
        "1/2 cup feta cheese, crumbled",
        "1/4 cup fresh parsley, chopped",
        "3 tbsp olive oil",
        "2 tbsp lemon juice",
        "1 clove garlic, minced",
        "1 tsp dried oregano",
        "Salt and pepper to taste",
      ],
      instructions: [
        "In a medium saucepan, combine quinoa and water or broth. Bring to a boil, then reduce heat to low, cover, and simmer for 15 minutes until water is absorbed.",
        "Remove from heat and let stand, covered, for 5 minutes. Fluff with a fork and let cool to room temperature.",
        "In a large bowl, combine cooled quinoa, cucumber, tomatoes, bell pepper, red onion, olives, feta cheese, and parsley.",
        "In a small bowl, whisk together olive oil, lemon juice, garlic, oregano, salt, and pepper.",
        "Pour dressing over the salad and toss gently to combine.",
        "Refrigerate for at least 30 minutes before serving to allow flavors to meld.",
      ],
    },
    {
      id: 5,
      title: "Vegetarian Chili",
      description: "A hearty and flavorful vegetarian chili loaded with beans, vegetables, and spices.",
      image: "./images/Vegetarian Chili Recipe.jpg",
      category: "vegetarian",
      prepTime: "20 min",
      cookTime: "40 min",
      servings: 6,
      ingredients: [
        "2 tbsp olive oil",
        "1 large onion, diced",
        "1 red bell pepper, diced",
        "1 green bell pepper, diced",
        "3 cloves garlic, minced",
        "2 tbsp chili powder",
        "1 tbsp ground cumin",
        "1 tsp dried oregano",
        "1/4 tsp cayenne pepper (optional)",
        "1 can (28 oz) diced tomatoes",
        "1 can (15 oz) black beans, drained and rinsed",
        "1 can (15 oz) kidney beans, drained and rinsed",
        "1 can (15 oz) corn kernels, drained",
        "2 cups vegetable broth",
        "Salt and pepper to taste",
        "Optional toppings: avocado, sour cream, shredded cheese, cilantro, lime wedges",
      ],
      instructions: [
        "Heat olive oil in a large pot over medium heat. Add onion and bell peppers and cook until softened, about 5 minutes.",
        "Add garlic and cook for another minute until fragrant.",
        "Stir in chili powder, cumin, oregano, and cayenne pepper (if using). Cook for 1 minute to toast the spices.",
        "Add diced tomatoes, black beans, kidney beans, corn, and vegetable broth. Stir to combine.",
        "Bring to a boil, then reduce heat to low and simmer, uncovered, for 30-40 minutes, stirring occasionally.",
        "Season with salt and pepper to taste.",
        "Serve hot with your choice of toppings.",
      ],
    },
    {
      id: 6,
      title: "Blueberry Pancakes",
      description: "Fluffy pancakes studded with juicy blueberries, perfect for a weekend breakfast.",
      image: "./images/Blueberry Pancakes for the Win.jpg",
      category: "breakfast",
      prepTime: "10 min",
      cookTime: "15 min",
      servings: 4,
      ingredients: [
        "2 cups all-purpose flour",
        "2 tbsp sugar",
        "1 tbsp baking powder",
        "1/2 tsp salt",
        "2 large eggs",
        "1 3/4 cups milk",
        "1/4 cup unsalted butter, melted",
        "1 tsp vanilla extract",
        "1 1/2 cups fresh blueberries",
        "Maple syrup for serving",
        "Additional butter for cooking",
      ],
      instructions: [
        "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
        "In another bowl, beat the eggs, then add milk, melted butter, and vanilla extract.",
        "Pour the wet ingredients into the dry ingredients and stir just until combined. Do not overmix; a few lumps are okay.",
        "Gently fold in the blueberries.",
        "Heat a griddle or non-stick pan over medium heat. Add a small amount of butter to coat the surface.",
        "Pour 1/4 cup of batter onto the griddle for each pancake.",
        "Cook until bubbles form on the surface and the edges look set, about 2-3 minutes.",
        "Flip and cook for another 1-2 minutes until golden brown.",
        "Serve warm with maple syrup and additional butter if desired.",
      ],
    },
    {
      id: 7,
      title: "Chicken Caesar Salad",
      description: "A classic Caesar salad with grilled chicken, crisp romaine lettuce, and homemade dressing.",
      image: "./images/Chicken Caesar Pasta Salad in 2025.jpg",
      category: "lunch",
      prepTime: "20 min",
      cookTime: "15 min",
      servings: 4,
      ingredients: [
        "2 boneless, skinless chicken breasts",
        "2 tbsp olive oil",
        "1 tsp Italian seasoning",
        "Salt and pepper to taste",
        "2 large heads romaine lettuce, chopped",
        "1 cup croutons",
        "1/2 cup Parmesan cheese, shaved or grated",
        "For the dressing:",
        "1/2 cup mayonnaise",
        "2 tbsp lemon juice",
        "2 cloves garlic, minced",
        "1 tsp Dijon mustard",
        "1 tsp Worcestershire sauce",
        "1/4 cup Parmesan cheese, grated",
        "2 anchovy fillets, minced (optional)",
        "Salt and pepper to taste",
      ],
      instructions: [
        "Season chicken breasts with olive oil, Italian seasoning, salt, and pepper.",
        "Grill chicken for 6-7 minutes per side or until internal temperature reaches 165°F (74°C).",
        "Let chicken rest for 5 minutes, then slice into strips.",
        "For the dressing, whisk together mayonnaise, lemon juice, garlic, Dijon mustard, Worcestershire sauce, grated Parmesan, and anchovies (if using). Season with salt and pepper.",
        "In a large bowl, toss chopped romaine lettuce with enough dressing to coat.",
        "Add croutons and toss gently.",
        "Divide salad among plates, top with sliced chicken and shaved Parmesan.",
        "Drizzle with additional dressing if desired.",
      ],
    },
    {
      id: 8,
      title: "Beef Stir Fry",
      description: "A quick and flavorful beef stir fry with colorful vegetables and a savory sauce.",
      image: "./images/Chinese Beef and Onion Stir Fry.jpg",
      category: "dinner",
      prepTime: "15 min",
      cookTime: "10 min",
      servings: 4,
      ingredients: [
        "1 lb flank steak, thinly sliced against the grain",
        "2 tbsp vegetable oil",
        "1 onion, sliced",
        "2 bell peppers (any color), sliced",
        "2 cups broccoli florets",
        "2 carrots, julienned",
        "3 cloves garlic, minced",
        "1 tbsp ginger, minced",
        "For the sauce:",
        "1/4 cup soy sauce",
        "2 tbsp oyster sauce",
        "1 tbsp brown sugar",
        "1 tbsp cornstarch",
        "1/2 cup beef broth",
        "1 tsp sesame oil",
        "Cooked rice for serving",
        "Sesame seeds and sliced green onions for garnish",
      ],
      instructions: [
        "In a small bowl, whisk together all sauce ingredients until smooth. Set aside.",
        "Heat 1 tablespoon of oil in a large wok or skillet over high heat.",
        "Add beef and stir-fry for 2-3 minutes until browned but not fully cooked. Remove from pan and set aside.",
        "Add remaining oil to the pan. Add onion, bell peppers, broccoli, and carrots. Stir-fry for 3-4 minutes until vegetables begin to soften.",
        "Add garlic and ginger and cook for 30 seconds until fragrant.",
        "Return beef to the pan. Pour sauce over everything and stir well.",
        "Cook for 1-2 minutes until sauce thickens and beef is cooked through.",
        "Serve over rice, garnished with sesame seeds and green onions.",
      ],
    },
    {
      id: 9,
      title: "Tiramisu",
      description: "A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
      image: "./images/Tiramisu Moelleux _ Un Dessert Italien Crémeux et Confortable.jpg",
      category: "dessert",
      prepTime: "30 min",
      cookTime: "0 min",
      servings: 8,
      ingredients: [
        "6 egg yolks",
        "3/4 cup granulated sugar",
        "2/3 cup milk",
        "1 1/4 cups heavy cream",
        "1 lb (16 oz) mascarpone cheese, room temperature",
        "1/2 tsp vanilla extract",
        "1 cup strong coffee or espresso, cooled",
        "2 tbsp rum or brandy (optional)",
        "24 ladyfinger cookies",
        "2 tbsp unsweetened cocoa powder",
        "Chocolate shavings for garnish (optional)",
      ],
      instructions: [
        "In a medium saucepan, whisk together egg yolks and sugar until well blended.",
        "Whisk in milk and cook over medium heat, stirring constantly, until mixture boils. Boil gently for 1 minute, then remove from heat and allow to cool slightly.",
        "Cover tightly and chill in refrigerator for 1 hour.",
        "In a medium bowl, beat cream with vanilla until stiff peaks form.",
        "Whisk mascarpone into the yolk mixture until smooth.",
        "Gently fold in the whipped cream into the mascarpone mixture.",
        "In a small bowl, combine coffee and rum (if using).",
        "Dip ladyfingers briefly into coffee mixture, about 1 second per side, and arrange in the bottom of a 9x13 inch dish.",
        "Spread half of the mascarpone mixture over the ladyfingers.",
        "Repeat with another layer of dipped ladyfingers and mascarpone mixture.",
        "Cover and refrigerate for at least 6 hours, preferably overnight.",
        "Before serving, dust with cocoa powder and garnish with chocolate shavings if desired.",
      ],
    },
    {
      id: 10,
      title: "Vegetable Curry",
      description: "A fragrant and spicy vegetable curry that's both satisfying and nutritious.",
      image: "./images/Vegetable Curry with Rice Recipe.jpg",
      category: "vegetarian",
      prepTime: "20 min",
      cookTime: "30 min",
      servings: 4,
      ingredients: [
        "2 tbsp vegetable oil",
        "1 large onion, diced",
        "3 cloves garlic, minced",
        "1 tbsp ginger, grated",
        "2 tbsp curry powder",
        "1 tsp ground cumin",
        "1 tsp ground coriander",
        "1/2 tsp turmeric",
        "1/4 tsp cayenne pepper (adjust to taste)",
        "1 can (14 oz) diced tomatoes",
        "1 can (14 oz) coconut milk",
        "1 cup vegetable broth",
        "2 potatoes, peeled and diced",
        "1 cauliflower, cut into florets",
        "1 carrot, sliced",
        "1 cup green beans, trimmed and cut into 1-inch pieces",
        "1 red bell pepper, diced",
        "1 cup frozen peas",
        "Salt and pepper to taste",
        "Fresh cilantro for garnish",
        "Cooked rice or naan bread for serving",
      ],
      instructions: [
        "Heat oil in a large pot over medium heat. Add onion and cook until softened, about 5 minutes.",
        "Add garlic and ginger and cook for 1 minute until fragrant.",
        "Stir in curry powder, cumin, coriander, turmeric, and cayenne pepper. Cook for 1 minute to toast the spices.",
        "Add diced tomatoes, coconut milk, and vegetable broth. Stir to combine.",
        "Add potatoes and bring to a simmer. Cook for 10 minutes.",
        "Add cauliflower, carrot, green beans, and bell pepper. Simmer for 15 minutes or until vegetables are tender.",
        "Stir in frozen peas and cook for 5 more minutes.",
        "Season with salt and pepper to taste.",
        "Serve over rice or with naan bread, garnished with fresh cilantro.",
      ],
    },
  ]
  
  // DOM Elements
  const searchInput = document.getElementById("search-input")
  const searchButton = document.getElementById("search-button")
  const recipesContainer = document.getElementById("recipes-container")
  const loadingSpinner = document.getElementById("loading-spinner")
  const recipeModal = document.getElementById("recipe-modal")
  const recipeDetails = document.getElementById("recipe-details")
  const closeModal = document.querySelector(".close-modal")
  const categoryButtons = document.querySelectorAll(".category-btn")
  
  // Current filter state
  let currentCategory = "all"
  let searchQuery = ""
  
  document.addEventListener("DOMContentLoaded", () => {
    // Check URL parameters for category filter
    const urlParams = new URLSearchParams(window.location.search)
    const categoryParam = urlParams.get("category")
  
    if (categoryParam) {
      currentCategory = categoryParam
      // Update active button
      categoryButtons.forEach((btn) => {
        if (btn.dataset.category === categoryParam) {
          btn.classList.add("active")
        } else if (btn.dataset.category === "all") {
          btn.classList.remove("active")
        }
      })
    }
  
    // Simulate loading
    setTimeout(() => {
      filterRecipes()
    }, 1000)
  })
  
  // Event Listeners
  searchButton.addEventListener("click", handleSearch)
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  })
  
  closeModal.addEventListener("click", () => {
    recipeModal.classList.remove("show")
    document.body.style.overflow = "auto"
  })
  
  window.addEventListener("click", (e) => {
    if (e.target === recipeModal) {
      recipeModal.classList.remove("show")
      document.body.style.overflow = "auto"
    }
  })
  
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")
  
      // Update current category
      currentCategory = button.dataset.category
  
      // Filter recipes
      filterRecipes()
    })
  })
  
  // Functions
  function handleSearch() {
    searchQuery = searchInput.value.trim().toLowerCase()
    filterRecipes()
  }
  
  function filterRecipes() {
    // Show loading spinner
    recipesContainer.innerHTML = ""
    loadingSpinner.style.display = "block"
  
    // Simulate loading delay
    setTimeout(() => {
      let filteredRecipes = recipes
  
      // Filter by category
      if (currentCategory !== "all") {
        filteredRecipes = filteredRecipes.filter((recipe) => recipe.category === currentCategory)
      }
  
      // Filter by search query
      if (searchQuery) {
        filteredRecipes = filteredRecipes.filter(
          (recipe) =>
            recipe.title.toLowerCase().includes(searchQuery) ||
            recipe.description.toLowerCase().includes(searchQuery) ||
            recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(searchQuery)),
        )
      }
  
      // Display filtered recipes
      displayRecipes(filteredRecipes)
    }, 500)
  }
  
  function displayRecipes(recipesToDisplay) {
    // Hide loading spinner
    loadingSpinner.style.display = "none"
  
    // Clear container
    recipesContainer.innerHTML = ""
  
    if (recipesToDisplay.length === 0) {
      recipesContainer.innerHTML = `
        <div class="no-results">
          <h3>No recipes found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      `
      return
    }
  
    // Create recipe cards with animation
    recipesToDisplay.forEach((recipe, index) => {
      const recipeCard = document.createElement("div")
      recipeCard.className = "recipe-card"
      recipeCard.style.setProperty("--i", index)
  
      recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-info">
          <span class="recipe-category">${recipe.category}</span>
          <h3 class="recipe-title">${recipe.title}</h3>
          <p class="recipe-description">${recipe.description}</p>
          <div class="recipe-meta">
            <span>Prep: ${recipe.prepTime}</span>
            <span>Cook: ${recipe.cookTime}</span>
          </div>
          <button class="view-recipe" data-id="${recipe.id}">View Recipe</button>
        </div>
      `
  
      recipesContainer.appendChild(recipeCard)
    })
  
    // Add event listeners to view recipe buttons
    document.querySelectorAll(".view-recipe").forEach((button) => {
      button.addEventListener("click", () => {
        const recipeId = Number.parseInt(button.dataset.id)
        openRecipeModal(recipeId)
      })
    })
  }
  
  function openRecipeModal(recipeId) {
    const recipe = recipes.find((r) => r.id === recipeId)
  
    if (!recipe) return
  
    // Populate recipe details
    recipeDetails.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
      <h2 class="recipe-detail-title">${recipe.title}</h2>
      <div class="recipe-detail-meta">
        <span>Prep Time: ${recipe.prepTime}</span>
        <span>Cook Time: ${recipe.cookTime}</span>
        <span>Servings: ${recipe.servings}</span>
        <span>Category: ${recipe.category}</span>
      </div>
      <p class="recipe-detail-description">${recipe.description}</p>
      
      <div class="recipe-ingredients">
        <h3>Ingredients</h3>
        <ul>
          ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
        </ul>
      </div>
      
      <div class="recipe-instructions">
        <h3>Instructions</h3>
        <ol>
          ${recipe.instructions.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>
    `
  
    // Show modal with animation
    recipeModal.classList.add("show")
    document.body.style.overflow = "hidden" // Prevent scrolling 
  }
  
  