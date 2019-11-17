import React from 'react';
import './css/RecipeItem.css';

const RecipeItem = value => {
  console.log(value);
  const {
    value: { label, url, image },
  } = value;
  console.log(label);

  return (
    <div className="recipeItem">
      <a href={url}>
        <img
          alt="pic-recipe"
          className="recipePicture"
          src={image}
          target="_blank"
        />
      </a>
      <h2 className="recipeLabel">{label}</h2>
      <div className="loop"></div>
      <div className="healthLabelsInfos"></div>
    </div>
  );
};

export { RecipeItem };
