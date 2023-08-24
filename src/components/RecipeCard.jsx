import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (

    <div className="flex space-x-4">
  <div className="rounded-full w-16 h-16 bg-blue-500">
      <h2 className="text-lg font-semibold mb-2">{recipe.label}</h2>
      <img src={recipe.image} alt={recipe.label} className="w-full h-auto mb-2" />
      <p className="text-gray-700">Source: {recipe.source}</p>
      <a
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        View Recipe
      </a>
    </div>
    
</div>

    
  );
};

export default RecipeCard;
