import { useState } from 'react';

import {
  StyledDeleteSection,
  StyledDeleteForm
} from './style';

function DeleteCocktail() {
  const [id, setId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch(`/api/cocktails/${id}`, {
        method: 'DELETE',
      });
  
      if (!response.ok) {
        throw new Error('Failed to delete cocktail');
      }
  
      const data = await response.json();
  
      setMessage(`${data.drinkName} deleted successfully`);
      setId('');
    } catch (err) {
      console.error(err);
      setMessage('Unable to delete cocktail');
    }
  };

  return (
      <StyledDeleteSection> 
        <div>
          <h2>Delete a Cocktail</h2>
            <StyledDeleteForm>
              <form onSubmit={handleDelete}>
                  <div>
                      <input
                      type="number"
                      id="id"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      placeholder="Enter cocktail ID"
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
        </div>
      </StyledDeleteSection>
  );
}

export default DeleteCocktail;