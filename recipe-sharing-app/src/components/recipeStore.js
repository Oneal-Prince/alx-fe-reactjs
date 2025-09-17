import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (deleteRecipe) => set(state => ({recipes: [...state.recipes, newRecipe] })),
  updateRecipe: (updateRecipe) => set(state => ({recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes })
}));


export default useRecipeStore;