import React from 'react';
import { RecipeItem } from './RecipeItem';
import './css/RecipeContainer.css';
//import PropTypes from 'prop-types';

const RecipesContainer = ({ value: recipes }) => {
  //   if ({ hits }) {
  //     return {hits.map(([]))}

  //   }
  console.log(recipes);
  if (recipes) {
    return (
      <div className="recipeContainer">
        {recipes.map(({ recipe }) => (
          <RecipeItem value={recipe} />
        ))}
      </div>
    );
  }
  return <div>No results yet</div>;

  //   return (
  //     <div>
  //       <RecipeItem value={result} />
  //       <p>No result found</p>
  //     </div>
  //   );
};

// RecipesContainer.propTypes = {
//   value: PropTypes.shape({}),
// };
export { RecipesContainer };
