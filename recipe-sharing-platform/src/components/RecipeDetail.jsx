import React, { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((item) => item.id.toString() === id);
    setRecipe(foundRecipe);
  }, [id]);



 return (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
    <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4" />

    <h3 className="text-xl font-semibold">Ingredients</h3>
    <ul className="list-disc list-inside mb-4">
      {recipe.ingredients.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h3 className="text-xl font-semibold">Instructions</h3>
    <ol className="list-decimal list-inside">
      {recipe.instructions.map((step, index) => (
        <li key={index}>{step}</li>
      ))}
    </ol>
  </div>

  );


export default RecipeDetail;
