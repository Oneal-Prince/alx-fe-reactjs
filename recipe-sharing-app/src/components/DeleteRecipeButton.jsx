import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Required
import { useRecipeStore } from './recipeStore'; // ✅ Required

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe); // ✅ Required
  const navigate = useNavigate(); // ✅ Required

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId); // Call from store
      navigate('/'); // Redirect to homepage or recipe list
    }
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;