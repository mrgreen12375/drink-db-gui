import { useEffect, useState } from 'react';

function Cocktails() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('/api/cocktails')
      .then(res => res.json())
      .then(data => setDrinks(data));
  }, []);

  return (
    <>
      <div className='container'>
        {drinks.map(drink => (
          <div className='card' key={drink.id}>
            <h3>ID: {drink.id}</h3>
            <div className='cardInfo'>
              <h4>{drink.drinkName}</h4>
              <img className='drinkImage' src={drink.drinkImage} alt={drink.drinkImage} />
              <p>{drink.drinkInstructions}</p>

              {Array.from({ length: 15 }, (_, i) => {
                const ingredient = drink[`drinkIngredient${i + 1}`];
                const measurement = drink[`drinkMeasurement${i + 1}`];

                if (!ingredient) return null;

                return (
                  <p key={i}>{measurement} : {ingredient}</p>
                );
              })}

              <a href= {drink.drinkVideo} target='blank'>Video</a>
            </div>
          </div>
      ))}
      </div>
    </>
  );
}

export default Cocktails;