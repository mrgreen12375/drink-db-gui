import { useState } from 'react';

import {
  StyledCocktailContainer,
  StyledCocktailForm,
  StyledCocktailCard,
} from './style';

function CocktailById() {
  const [id, setId] = useState('');
  const [cocktail, setCocktail] = useState(null);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/cocktails/${id}`);

      if (!response.ok) {
        throw new Error('Cocktail not found');
      }

      const data = await response.json();

      setCocktail(data);
      setMessage('');
      setId('');
    } catch (err) {
      console.error(err);
      setCocktail(null);
      setMessage('Unable to find cocktail');
    }
  };

  return (
    <StyledCocktailContainer>
      <h2>Find a Cocktail</h2>
      <StyledCocktailForm>
        <form onSubmit={handleSearch}>
          <div>
            <input
              type="number"
              id="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Enter cocktail ID"
              required
            />

            <button type="submit">Find Cocktail</button>
          </div>
        </form>
      </StyledCocktailForm>

      {message && (
        <div>
          <p>{message}</p>
        </div>
      )}

      {cocktail && (
        <StyledCocktailCard>
          <h3>ID: {cocktail.id}</h3>
          <div>
            <h4>{cocktail.drinkName}</h4>
            <img src={cocktail.drinkImage} alt={cocktail.drinkName} />
            <p>{cocktail.drinkInstructions}</p>

            {Array.from({ length: 15 }, (_, i) => {
              const ingredient = cocktail[`drinkIngredient${i + 1}`];
              const measurement = cocktail[`drinkMeasurement${i + 1}`];

              if (!ingredient) return null;

              return (
                <h5 key={i}>
                  {measurement} : {ingredient}
                </h5>
              );
            })}

            <a href={cocktail.drinkVideo} target="_blank" rel="noreferrer">
              Video
            </a>
          </div>
        </StyledCocktailCard>
      )}
    </StyledCocktailContainer>
  );
}

export default CocktailById;
