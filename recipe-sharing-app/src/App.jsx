
import './App.css'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import DeleteRecipeButton from './components/DeleteRecipeButton'
import EditRecipeForm from './components/EditRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {


  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
      <DeleteRecipeButton />
      <EditRecipeForm />      
    </>
  )
}

export default App
