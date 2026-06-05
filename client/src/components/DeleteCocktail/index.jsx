import { useState } from 'react';

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

      setMessage(`Cocktail ${id} deleted successfully`);
      setId('');
    } catch (err) {
      console.error(err);
      setMessage('Unable to delete cocktail');
    }
  };

  return (
    <div className="createContainer">
        <div className="deleteDrink">
        <h2>Delete a Cocktail</h2>

        <div className="createContainerForm delete">
            <form onSubmit={handleDelete}>
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

export default DeleteCocktail;