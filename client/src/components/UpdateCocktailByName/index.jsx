import { useState } from 'react';

function UpdateCocktailByName() {
  const [updatedDrink, setUpdatedDrink] = useState(null);

  const [formData, setFormData] = useState({
    searchName: '',
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoadCocktail = async () => {
    try {
      const response = await fetch(
        `/api/cocktails/name/${formData.searchName}`
      );

      if (!response.ok) {
        throw new Error('Cocktail not found');
      }

      const data = await response.json();

      setFormData((prev) => ({
        ...prev,
        ...data,
        searchName: prev.searchName,
      }));
    } catch (err) {
      console.error(err);
      alert('Cocktail not found');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { searchName, ...updateData } = formData;

      const response = await fetch(
        `/api/cocktails/name/${searchName}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateData),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to update cocktail');
      }

      const data = await response.json();

      setUpdatedDrink(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="createContainer">
      <div className="createContainerForm update">
        <h2>Update Cocktail</h2>

        <form onSubmit={handleSubmit}>
          <div className="idRow">
            <input
              type="text"
              name="searchName"
              placeholder="Cocktail Name"
              value={formData.searchName}
              onChange={handleChange}
              required
            />

            <button
              type="button"
              onClick={handleLoadCocktail}
            >
              Load Cocktail
            </button>
          </div>

          <input
            type="text"
            name="drinkName"
            placeholder="Cocktail Name"
            value={formData.drinkName}
            onChange={handleChange}
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
            Update Cocktail
          </button>
        </form>
      </div>

      <div className="createdDrink">
        {updatedDrink && (
          <div>
            <h2>Review</h2>

            <div className="card">
              <h3>ID: {updatedDrink.id}</h3>

              <div className="cardInfo">
                <h4>{updatedDrink.drinkName}</h4>

                <img
                  className="drinkImage"
                  src={updatedDrink.drinkImage}
                  alt={updatedDrink.drinkName}
                />

                <p>{updatedDrink.drinkInstructions}</p>

                {Array.from({ length: 7 }, (_, i) => {
                  const ingredient =
                    updatedDrink[`drinkIngredient${i + 1}`];
                  const measurement =
                    updatedDrink[`drinkMeasurement${i + 1}`];

                  if (!ingredient) return null;

                  return (
                    <h5 key={i}>
                      {measurement} : {ingredient}
                    </h5>
                  );
                })}

                {updatedDrink.drinkVideo && (
                  <a
                    href={updatedDrink.drinkVideo}
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

export default UpdateCocktailByName;