import { useState } from 'react';

import {
  StyledCreateCocktailContainer,
  StyledCreateCocktailForm,
  StyledIngredientForm,
  StyledCocktailCardContainer,
  StyledCocktailCard
} from './style';

function CreateCocktail() {
  const [createdDrink, setCreatedDrink] = useState(null);

  const [formData, setFormData] = useState({
    drinkName: '',
    drinkImage: '',
    drinkInstructions: '',
    drinkVideo: '',
    drinkIngredient1: '',
    drinkIngredient2: '',
    drinkIngredient3: '',
    drinkIngredient4: '',
    drinkIngredient5: '',
    drinkIngredient6: '',
    drinkIngredient7: '',
    drinkMeasurement1: '',
    drinkMeasurement2: '',
    drinkMeasurement3: '',
    drinkMeasurement4: '',
    drinkMeasurement5: '',
    drinkMeasurement6: '',
    drinkMeasurement7: '',
  });

  const resetForm = {
    drinkName: '',
    drinkImage: '',
    drinkInstructions: '',
    drinkVideo: '',
    drinkIngredient1: '',
    drinkIngredient2: '',
    drinkIngredient3: '',
    drinkIngredient4: '',
    drinkIngredient5: '',
    drinkIngredient6: '',
    drinkIngredient7: '',
    drinkMeasurement1: '',
    drinkMeasurement2: '',
    drinkMeasurement3: '',
    drinkMeasurement4: '',
    drinkMeasurement5: '',
    drinkMeasurement6: '',
    drinkMeasurement7: '',
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/cocktails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log('Cocktail created:', data);

      setCreatedDrink(data);
      setFormData(resetForm);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledCreateCocktailContainer>
        <StyledCreateCocktailForm>
            <h2>Create a Cocktail</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="drinkName"
                placeholder="Cocktail Name"
                value={formData.drinkName}
                onChange={handleChange}
                required
                />

                <input
                type="text"
                name="drinkImage"
                placeholder="Image URL"
                value={formData.drinkImage}
                onChange={handleChange}
                />

                <textarea
                name="drinkInstructions"
                placeholder="Instructions"
                value={formData.drinkInstructions}
                onChange={handleChange}
                rows="4"
                />

                {Array.from({ length: 7 }, (_, i) => (
                <StyledIngredientForm key={i}>
                    <input
                    type="text"
                    name={`drinkMeasurement${i + 1}`}
                    placeholder="Measurement"
                    value={formData[`drinkMeasurement${i + 1}`]}
                    onChange={handleChange}
                    />

                    <input
                    type="text"
                    name={`drinkIngredient${i + 1}`}
                    placeholder="Ingredient"
                    value={formData[`drinkIngredient${i + 1}`]}
                    onChange={handleChange}
                    />
                </StyledIngredientForm>
                ))}

                <input
                type="text"
                name="drinkVideo"
                placeholder="Video URL"
                value={formData.drinkVideo}
                onChange={handleChange}
                />

                <button type="submit">
                Create Cocktail
                </button>
            </form>
        </StyledCreateCocktailForm>
        {createdDrink && (
        <StyledCocktailCardContainer>        
          <h2>Review</h2>        
          <StyledCocktailCard>
            <h3>ID: {createdDrink.id}</h3>
              <h4>{createdDrink.drinkName}</h4>

              <img
              src={createdDrink.drinkImage}
              alt={createdDrink.drinkName}
              />

              <p>{createdDrink.drinkInstructions}</p>

              {Array.from({ length: 7 }, (_, i) => {
              const ingredient =
                  createdDrink[`drinkIngredient${i + 1}`];
              const measurement =
                  createdDrink[`drinkMeasurement${i + 1}`];

              if (!ingredient) return null;

              return (
                  <h5 key={i}>
                  {measurement} : {ingredient}
                  </h5>
              );
              })}

              {createdDrink.drinkVideo && (
              <a
                  href={createdDrink.drinkVideo}
                  target="_blank"
                  rel="noreferrer"
              >
                  Video
              </a>
              )}
          </StyledCocktailCard>
        </StyledCocktailCardContainer>
        )}
    </StyledCreateCocktailContainer>
  );
}

export default CreateCocktail;