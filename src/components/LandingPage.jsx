import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white text-center p-5">
        <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg">
          Welcome to the Pet & Recipe Finder!
        </h1>
        <p className="text-xl mb-8 max-w-xl">
          Discover amazing recipes and adorable pets all in one place. Whether
          you’re looking for your next meal or a furry friend, we’ve got you
          covered!
        </p>
        <Link to="/petgallery">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
            Explore Now
          </button>
        </Link>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center p-4">
        <p>© 2024 Pet & Recipe Finder. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
