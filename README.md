# Pet and Recipes App

Welcome to the **Pet and Recipes App**! This application allows users to explore adorable pet images and find delicious recipes. Users can search for recipes based on ingredients and view detailed information about each recipe, including images, ingredients, and cooking instructions.

## Features

### Pet Gallery

- **Random Pet Images**: Fetch random images of dogs and cats from APIs.
- **Breed Information**: Display breed names for dogs.
- **Fun Facts**: Show interesting facts about dogs and cats.
- **Responsive Design**: The gallery is mobile-responsive with a hamburger menu for easy navigation.

### Recipe Finder

- **Search for Recipes**: Users can search for recipes by entering ingredients.
- **View Detailed Recipe Information**: Each recipe card displays:
  - Title
  - Image
  - Ingredients
  - Calories
  - Cuisine Type
  - Meal Type
  - Dish Type
- **Toggle Ingredient Visibility**: Users can click "Show More" to view the list of ingredients.
- **Responsive Design**: The layout adapts to various screen sizes.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI**: React components that implement Google's Material Design.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Edamam Recipe Search API**: API used to fetch recipe data.
- **Dog CEO API**: API used to fetch random dog images.
- **The Cat API**: API used to fetch random cat images.

## API Links

- [Edamam Recipe Search API](https://developer.edamam.com/recipe-search-api-docs)
- [Dog CEO API](https://thedogapi.com/)
- [The Cat API](https://thecatapi.com/)

## Live URL

You can access the live version of the application at:

[Live URL Here](https://week-8-nu.vercel.app/)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/pet-and-recipes-app.git
   cd pet-and-recipes-app
   ```

Install dependencies:

```bash
npm install
```

## Setting Up the Environment

1. **Create a `.env` file** in the root of the project and add your Edamam API credentials:
   ```bash
   VITE_APP_ID=YOUR_APP_ID
   VITE_APP_KEY=YOUR_APP_KEY
   ```

Replace YOUR_APP_ID and YOUR_APP_KEY with your actual Edamam API credentials.
Running the Application

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to http://localhost:5173 to view the application.

## Usage

### Pet Gallery

- Navigate to the Pet Gallery section of the app.
- View random images of dogs and cats along with their breed names and fun facts.
- Click on buttons to fetch new images.

### Recipe Finder

- Navigate to the Recipe Finder section of the app.
- Use the search bar at the top of the page to enter an ingredient you want to - search recipes for.
- Click on "Search" to retrieve recipes.
- Browse through the displayed recipes. Click "Show More" to view the list of - ingredients and instructions for each recipe.
- Example Recipe Data Structure

### Here’s an example of how a recipe is structured in the application:

```bash

json
{
"title": "Electric Bread - Sticky Buns",
"image": "https://example.com/image.jpg",
"ingredients": [
"3 c White Bread Flour",
"2 tb Dry Milk",
"3 tb Sugar",
"1 ts Salt",
"3 tb Butter"
],
"calories": 861.8,
"cuisineType": ["American"],
"mealType": ["Lunch/Dinner"],
"dishType": ["Condiments and Sauces"]
}
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Thanks to Edamam for providing the recipe API.
- Thanks to Dog CEO for providing random dog images.
- Thanks to The Cat API for providing random cat images.
- Thanks to Material-UI and Tailwind CSS for their amazing libraries that helped build this application.
