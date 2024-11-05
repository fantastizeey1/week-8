import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const Card2 = ({ recipe = {} }) => {
  const [showIngredients, setShowIngredients] = useState(false); // State to manage ingredient visibility

  // Use a placeholder image if none is provided
  const imageUrl =
    recipe.image ||
    `https://source.unsplash.com/featured/?${recipe.title.replace(" ", "+")}`;

  const handleShowMore = () => {
    setShowIngredients(!showIngredients); // Toggle ingredient visibility
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: 3,
        ":hover": { boxShadow: 6, transform: "scale(1.05)" },
        transition: "0.3s",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageUrl || "https://via.placeholder.com/140"} // Placeholder if no image
        alt={recipe.title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {recipe.title}
        </Typography>

        {/* Display calories */}
        <Typography variant="body2" color="text.secondary">
          Calories: {Math.round(recipe.calories || 0)}
        </Typography>

        {/* Display cuisine type */}
        <Typography variant="body2" color="text.secondary">
          Cuisine Type: {recipe.cuisineType.join(", ") || "N/A"}
        </Typography>

        {/* Display meal type */}
        <Typography variant="body2" color="text.secondary">
          Meal Type: {recipe.mealType.join(", ") || "N/A"}
        </Typography>

        {/* Display dish type */}
        <Typography variant="body2" color="text.secondary">
          Dish Type: {recipe.dishType.join(", ") || "N/A"}
        </Typography>

        {/* Show ingredients only if showIngredients is true */}
        {showIngredients && (
          <ul className="flex flex-col mt-2">
            {Array.isArray(recipe.ingredients) ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            ) : (
              <li>{recipe.ingredients}</li> // Handle non-array case
            )}
          </ul>
        )}
      </CardContent>
      <CardActions>
        {/* Button to toggle ingredients */}
        <Button size="small" color="primary" onClick={handleShowMore}>
          {showIngredients ? "Show Less" : "Show More"}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Card2;
