import { createBrowserRouter } from "react-router";
import RecipeDetails from "./components/RecipeDetails";


const router = createBrowserRouter([
  {
    path: '/Recipes',
    Component: RecipeDetails
  }
])
export default router;