import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-transform hover:scale-105">
      <img
        className="w-full h-48 object-cover object-center"
        src={recipe.image}
        alt={recipe.title}
      />
      <div className="p-4">
        <h2 className="text-xl font-bold">{recipe.title}</h2>
        <ul className="mt-2">
          {recipe.extendedIngredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">
              {ingredient.original}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-gray-600">
          Calories:{" "}
          {Math.round(
            recipe.nutrition?.nutrients.find((n) => n.name === "Calories")
              ?.amount || 0
          )}
        </p>
      </div>
    </div>
  );
};

export default RecipeCard;
