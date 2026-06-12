import { useState } from 'react';

import {
  StyledDeleteSection,
  StyledDeleteForm
} from './style';

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
    <StyledDeleteSection>
        <h2>Delete a Cocktail</h2>
        <StyledDeleteForm>
          <form onSubmit={handleDelete}>
            <div>
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
        </StyledDeleteForm>

        {message && (
          <div>
            <p>{message}</p>
          </div>
        )}
    </StyledDeleteSection>
  );
}

export default DeleteCocktailByName;