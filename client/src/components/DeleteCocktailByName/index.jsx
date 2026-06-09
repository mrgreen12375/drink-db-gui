import { useState } from 'react';

function DeleteCocktailByName() {
  const [drinkName, setDrinkName] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `/api/cocktails/name/${drinkName}`,
        {
          method: 'DELETE',
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete cocktail');
      }

      const data = await response.json();

      setMessage(
        `${data.drinkName} deleted successfully`
      );

      setDrinkName('');
    } catch (err) {
      console.error(err);
      setMessage('Unable to delete cocktail');
    }
  };

  return (
    <div className="createContainer">
      <div className="createdDrink">
        <h2>Delete a Cocktail</h2>

        <div className="createContainerForm delete">
          <form onSubmit={handleDelete}>
            <div className="deleteIdRow">
              <input
                type="text"
                value={drinkName}
                onChange={(e) =>
                  setDrinkName(e.target.value)
                }
                placeholder="Enter cocktail name"
                required
              />

              <button type="submit">
                Delete Cocktail
              </button>
            </div>
          </form>
        </div>

        {message && (
          <div className="deleteMessage">
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DeleteCocktailByName;