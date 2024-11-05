import React, { useState } from "react";
import RecipeCard from "./components/RecipeCard";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import ReactLoading from "react-loading";

const Spooncooler = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchRecipes = async ({ query, cuisine, diet }) => {
    setLoading(true);
    setError("");

    try {
      // Construct the URL with search parameters
      const apiUrl = new URL(
        "https://api.spoonacular.com/recipes/complexSearch"
      );
      apiUrl.searchParams.append("query", query);
      if (cuisine) apiUrl.searchParams.append("cuisine", cuisine);
      if (diet) apiUrl.searchParams.append("diet", diet);
      apiUrl.searchParams.append(
        "apiKey",
        import.meta.env.VITE_SPOONACULAR_API_KEY
      );

      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        setError("No recipes found");
        setRecipes([]);
        return;
      }

      // Fetch detailed information for each recipe
      const recipeDetailsPromises = data.results.map(async (recipe) => {
        const detailsResponse = await fetch(
          `https://api.spoonacular.com/recipes/${
            recipe.id
          }/information?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}`
        );
        return await detailsResponse.json();
      });

      const detailedRecipes = await Promise.all(recipeDetailsPromises);
      setRecipes(detailedRecipes);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Define loading animation type and color
  const loadingType = "Spin"; // You can choose a loading type from the ReactLoading documentation
  const loadingColor = "#0000FF"; // Set your desired loading color

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
        />
      )}
      {error && <h3 className="text-center text-red-500">{error}</h3>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <Card key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Spooncooler;
