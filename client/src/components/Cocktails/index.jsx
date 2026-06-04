import { useEffect, useState } from 'react';

function CocktailsAll() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch('/api/cocktails')
      .then(res => res.json())
      .then(data => setDrinks(data));
  }, []);

  return (
    <>
      {drinks.map(drink => (
        <p key={drink.id}>{drink.drinkName}</p>
      ))}
    </>
  );
}

export default CocktailsAll;