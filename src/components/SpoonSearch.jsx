import React, { useState, useEffect } from "react";

const Searchspoon = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [diet, setDiet] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query && !cuisine && !diet) {
      alert("Please enter a search term or select a cuisine/diet.");
      return;
    }

    setLoading(true);
    onSearch({ query, cuisine, diet });
    setLoading(false);
  };

  useEffect(() => {
    if (cuisine || diet) {
      onSearch({ query, cuisine, diet });
    }
  }, [cuisine, diet]); // Trigger search on cuisine or diet change

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col md:flex-row justify-center p-6 bg-gray-50 rounded-lg shadow-md"
    >
      <div className="flex flex-col md:flex-row md:items-center w-full max-w-4xl space-y-3 md:space-y-0 md:space-x-3">
        <input
          id="query"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="w-full md:w-auto border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition duration-200 placeholder-gray-500"
        />

        <select
          id="cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full md:w-auto border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition duration-200 bg-white text-gray-700"
        >
          <option value="">Select Cuisine</option>
          <option value="Italian">Italian</option>
          <option value="Chinese">Chinese</option>
          <option value="Mexican">Mexican</option>
          <option value="Indian">Indian</option>
          <option value="French">French</option>
          <option value="Thai">Thai</option>
          <option value="Japanese">Japanese</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Korean">Korean</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Spanish">Spanish</option>
          <option value="Greek">Greek</option>
          <option value="North African">North African</option>
          <option value="West African">West African</option>
          <option value="East African">East African</option>
          <option value="Southern African">Southern African</option>
          <option value="Central African">Central African</option>
          {/* Add more options as needed */}
        </select>

        <select
          id="diet"
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="w-full md:w-auto border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition duration-200 bg-white text-gray-700"
        >
          <option value="vegetarian">Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="gluten-free">Gluten-Free</option>
          <option value="paleo">Paleo</option>
          <option value="keto">Keto</option>
          <option value="mediterranean">Mediterranean</option>
          <option value="dash">DASH</option>
          <option value="whole30">Whole30</option>
          <option value="low-carb">Low-Carb</option>
          <option value="intermittent-fasting">Intermittent Fasting</option>
          <option value="flexitarian">Flexitarian</option>
          {/* Add more diet options as needed */}
        </select>

        <button
          type="submit"
          className={`flex items-center justify-center w-full md:w-auto bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-3 shadow-lg transition duration-200 hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>
    </form>
  );
};

export default Searchspoon;
