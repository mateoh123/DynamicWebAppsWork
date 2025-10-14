import RecipeCard from "./components/RecipeCard";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <div className="recipeWrapper">
        <RecipeCard />
      </div>
    </div>
  );
};

export default App;
