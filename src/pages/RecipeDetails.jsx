import React from 'react';

const RecipeDetails = ({ match }) => {
  const { recipeId } = match.params; // Extract the recipe ID from the URL
  // Fetch the recipe details based on the recipeId (you can use a state management library or a context)
  const recipeDetails = {}; // Replace with your actual recipe fetching logic

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-2">{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} className="w-full h-auto mb-4" />
      <p className="text-gray-700">{recipeDetails.description}</p>
      {/* Add more details here */}
    </div>
  );
};

export default RecipeDetails;
