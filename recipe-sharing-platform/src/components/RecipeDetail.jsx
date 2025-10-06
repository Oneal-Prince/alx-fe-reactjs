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
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-700 text-base leading-relaxed mb-6">{recipe.summary}</p>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Ingredients</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Coming soon...</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Instructions</h2>
              <p className="text-gray-700">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


export default RecipeDetail;
