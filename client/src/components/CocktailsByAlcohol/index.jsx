import { useState } from 'react';

function CocktailsByAlcohol() {
  const [alcohol, setAlcohol] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [message, setMessage] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `/api/cocktails/alcohol/${encodeURIComponent(alcohol)}`
      );

      if (!response.ok) {
        throw new Error('No cocktails found');
      }

      const data = await response.json();

      setCocktails(data);
      setMessage('');
      setAlcohol('');
    } catch (err) {
      console.error(err);
      setCocktails([]);
      setMessage('Unable to find cocktails');
    }
  };

  return (
    <div className="createContainer">
        <div className="createdDrink">
            <h2>Find Cocktails</h2>

            <div className="createContainerForm get">
            <form onSubmit={handleSearch}>
                <div className="deleteIdRow">
                <input
                    type="text"
                    id="alcohol"
                    value={alcohol}
                    onChange={(e) => setAlcohol(e.target.value)}
                    placeholder="Enter alcohol name"
                    required
                />

                <button type="submit">
                    Find Cocktails
                </button>
                </div>
            </form>
            </div>
        </div>

        {message && (
          <div className="deleteMessage">
            <p>{message}</p>
          </div>
        )}

        {cocktails.length > 0 && (
          <div className="container">
            {cocktails.map((cocktail) => (
              <div className="card" key={cocktail.id}>
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
                    const ingredient =
                      cocktail[`drinkIngredient${i + 1}`];
                    const measurement =
                      cocktail[`drinkMeasurement${i + 1}`];

                    if (!ingredient) return null;

                    return (
                      <h5 key={i}>
                        {measurement} : {ingredient}
                      </h5>
                    );
                  })}

                  {cocktail.drinkVideo && (
                    <a
                      href={cocktail.drinkVideo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Video
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

export default CocktailsByAlcohol;