import { useEffect, useState } from 'react';

import {
  StyledContainer,
  StyledCocktailContainer,
  StyledCocktailCard,
} from './style';

function Cocktails() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('/api/cocktails/alphabetical')
      .then((res) => res.json())
      .then((data) => setDrinks(data));
  }, []);

  return (
    <StyledContainer>
      <h2>All Cocktails</h2>
      <StyledCocktailContainer>
        {drinks.map((drink) => (
          <StyledCocktailCard key={drink.id}>
            <h3>ID: {drink.id}</h3>
            <div>
              <h4>{drink.drinkName}</h4>
              <img src={drink.drinkImage} alt={drink.drinkImage} />
              <p>{drink.drinkInstructions}</p>

              {Array.from({ length: 15 }, (_, i) => {
                const ingredient = drink[`drinkIngredient${i + 1}`];
                const measurement = drink[`drinkMeasurement${i + 1}`];

                if (!ingredient) return null;

                return (
                  <h5 key={i}>
                    {measurement} : {ingredient}
                  </h5>
                );
              })}

              <a href={drink.drinkVideo} target="blank">
                Video
              </a>
            </div>
          </StyledCocktailCard>
        ))}
      </StyledCocktailContainer>
    </StyledContainer>
  );
}

export default Cocktails;
