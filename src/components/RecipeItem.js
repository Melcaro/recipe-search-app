import React from 'react';
import './css/RecipeItem.css';

const RecipeItem = value => {
  console.log(value.recipe.label);

  return (
    <div className="recipeItem">
      <img alt="pic-recipe" className="recipePicture" />
      <h2 className="recipeLabel">recipeTitle</h2>
      <div className="loop"></div>
      <div className="healthLabelsInfos"></div>
    </div>
  );
};

export { RecipeItem };
