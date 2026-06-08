import { useState } from 'react';

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
    <div className="createContainer">
      <div className="createdDrink">
        <h2>Find a Cocktail</h2>

        <div className="createContainerForm get">
          <form onSubmit={handleSearch}>
            <div className="deleteIdRow">
              <input
                type="number"
                id="id"
                value={id}
                onChange={(e) => setId(e.target.value)}
                placeholder="Enter cocktail ID"
                required
              />

              <button type="submit">
                Find Cocktail
              </button>
            </div>
          </form>
        </div>

        {message && (
          <div className="deleteMessage">
            <p>{message}</p>
          </div>
        )}

{cocktail && (
  <div className="container">
    <div className="card">
      <h3>ID: {cocktail.id}</h3>

      <div className="cardInfo">
        <h4>{cocktail.drinkName}</h4>

        <img
          className="drinkImage"
          src={cocktail.drinkImage}
          alt={cocktail.drinkName}
        />

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

        {cocktail.drinkVideo && (
          <a href={cocktail.drinkVideo} target="_blank" rel="noreferrer">
            Video
          </a>
        )}
      </div>
    </div>
  </div>
)}
      </div>
    </div>
  );
}

export default CocktailById;