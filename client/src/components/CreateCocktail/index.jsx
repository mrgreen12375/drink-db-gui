import { useState } from 'react';

function CreateCocktail() {
  const [createdDrink, setCreatedDrink] = useState(null);

  const [formData, setFormData] = useState({
    drinkName: '',
    drinkImage: '',
    drinkInstructions: '',
    drinkVideo: '',
    drinkIngredient1: '',
    drinkIngredient2: '',
    drinkIngredient3: '',
    drinkIngredient4: '',
    drinkIngredient5: '',
    drinkIngredient6: '',
    drinkIngredient7: '',
    drinkMeasurement1: '',
    drinkMeasurement2: '',
    drinkMeasurement3: '',
    drinkMeasurement4: '',
    drinkMeasurement5: '',
    drinkMeasurement6: '',
    drinkMeasurement7: '',
  });

  const resetForm = {
    drinkName: '',
    drinkImage: '',
    drinkInstructions: '',
    drinkVideo: '',
    drinkIngredient1: '',
    drinkIngredient2: '',
    drinkIngredient3: '',
    drinkIngredient4: '',
    drinkIngredient5: '',
    drinkIngredient6: '',
    drinkIngredient7: '',
    drinkMeasurement1: '',
    drinkMeasurement2: '',
    drinkMeasurement3: '',
    drinkMeasurement4: '',
    drinkMeasurement5: '',
    drinkMeasurement6: '',
    drinkMeasurement7: '',
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/cocktails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log('Cocktail created:', data);

      setCreatedDrink(data);
      setFormData(resetForm);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="createContainer">
        <div className="createContainerForm">
            <h2>Create a Cocktail</h2>

            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="drinkName"
                placeholder="Cocktail Name"
                value={formData.drinkName}
                onChange={handleChange}
                required
                />

                <input
                type="text"
                name="drinkImage"
                placeholder="Image URL"
                value={formData.drinkImage}
                onChange={handleChange}
                />

                <textarea
                name="drinkInstructions"
                placeholder="Instructions"
                value={formData.drinkInstructions}
                onChange={handleChange}
                rows="4"
                />

                {Array.from({ length: 7 }, (_, i) => (
                <div key={i} className="ingredientRow">
                    <input
                    type="text"
                    name={`drinkMeasurement${i + 1}`}
                    placeholder="Measurement"
                    value={formData[`drinkMeasurement${i + 1}`]}
                    onChange={handleChange}
                    />

                    <input
                    type="text"
                    name={`drinkIngredient${i + 1}`}
                    placeholder="Ingredient"
                    value={formData[`drinkIngredient${i + 1}`]}
                    onChange={handleChange}
                    />
                </div>
                ))}

                <input
                type="text"
                name="drinkVideo"
                placeholder="Video URL"
                value={formData.drinkVideo}
                onChange={handleChange}
                />

                <button type="submit">
                Create Cocktail
                </button>
            </form>
        </div>
        <div className="createdDrink">
                {createdDrink && (
            <div>        
                <h2>Review</h2>        
                <div className="card">
                <h3>ID: {createdDrink.id}</h3>

                <div className="cardInfo">
                    <h4>{createdDrink.drinkName}</h4>

                    <img
                    className="drinkImage"
                    src={createdDrink.drinkImage}
                    alt={createdDrink.drinkName}
                    />

                    <p>{createdDrink.drinkInstructions}</p>

                    {Array.from({ length: 7 }, (_, i) => {
                    const ingredient =
                        createdDrink[`drinkIngredient${i + 1}`];
                    const measurement =
                        createdDrink[`drinkMeasurement${i + 1}`];

                    if (!ingredient) return null;

                    return (
                        <p key={i}>
                        {measurement} : {ingredient}
                        </p>
                    );
                    })}

                    {createdDrink.drinkVideo && (
                    <a
                        href={createdDrink.drinkVideo}
                        target="_blank"
                        rel="noreferrer"
                    >
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

export default CreateCocktail;