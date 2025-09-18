import React from 'react';

const RecommendationsList = ({ recommendedRecipes = [], title = "Recommended for You" }) => {
  if (recommendedRecipes.length === 0) {
    return <div>No recommendations available.</div>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <div>
        {recommendedRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsList;