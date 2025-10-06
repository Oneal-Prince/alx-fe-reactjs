import { useState } from "react";
function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return ( 
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add a New Recipe</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
      
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Recipe Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g. Spaghetti Bolognese"
            />
     
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Ingredients</label>
            <textarea 
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="List ingredients, one per line"
            /> 
          </div>
          </form>
    </div>

   );
}

export default AddRecipeForm;