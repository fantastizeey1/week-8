import React, { useState } from "react";
import Card2 from "./Card"; // Ensure this points to your updated Card2 component
import SearchBar from "./SearchBar";
import ReactLoading from "react-loading";

const Recipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async (query) => {
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Construct the API URL for Edamam
      const response = await fetch(
        ` https://api.edamam.com/search?app_id=455e4799&app_key=97302a9fee723dc1d3d1f3f6c04ced96&q=${query}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      // Check if there are results
      if (data.hits.length === 0) {
        setError("No recipes found for your search.");
        return;
      }

      // Set the recipes state with the fetched data
      setRecipes(data.hits.map((hit) => hit.recipe)); // Extract recipe details
    } catch (err) {
      setError(err.message || "Failed to fetch recipes");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadingType = "spin";
  const loadingColor = "#0000FF";

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-3xl font-bold">Recipe Finder</h1>
      <SearchBar onSearch={fetchRecipes} />
      {loading && (
        <ReactLoading
          type={loadingType}
          color={loadingColor}
          height={250}
          width={250}
          className="items-center flex"
        />
      )}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {recipes.map((recipe) => (
          <Card2
            key={recipe.label}
            recipe={{
              title: recipe.label,
              image: recipe.image,
              ingredients: recipe.ingredientLines,
              calories: recipe.calories,
              cuisineType: recipe.cuisineType,
              mealType: recipe.mealType,
              dishType: recipe.dishType,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
