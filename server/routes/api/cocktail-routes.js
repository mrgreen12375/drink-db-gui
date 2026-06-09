const router = require('express').Router();
const { Op } = require('sequelize');
const { Cocktail } = require('../../models');


// get all cocktails
router.get('/', (req, res) => {
  Cocktail.findAll()
    .then(drinkData => res.json(drinkData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one cocktail
router.get('/:id', (req, res) => {
  Cocktail.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(drinkData => {
      if (!drinkData) {
        res.status(404).json({ message: 'No cocktail found with this id' });
        return;
      }
      res.json(drinkData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get cocktail by drink name
router.get('/name/:drinkName', async (req, res) => {
  try {
    const drinkData = await Cocktail.findOne({
      where: {
        drinkName: {
          [Op.iLike]: req.params.drinkName
        }
      }
    });

    if (!drinkData) {
      return res.status(404).json({
        message: 'No cocktail found with this name'
      });
    }

    res.json(drinkData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// get cocktail by alcohol name
router.get('/alcohol/:drinkIngredient1', (req, res) => {
  Cocktail.findAll({
    where: {
      drinkIngredient1: {
        [Op.iLike]: req.params.drinkIngredient1
      }
    }
  })
    .then(drinkData => {
      if (!drinkData) {
        res.status(404).json({ message: 'No cocktail found with this name' });
        return;
      }

      res.json(drinkData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create a cocktail
router.post('/', (req, res) => {
  Cocktail.create({
    drinkName: req.body.drinkName,
    drinkImage: req.body.drinkImage,
    drinkInstructions: req.body.drinkInstructions,
    drinkIngredient1: req.body.drinkIngredient1,
    drinkIngredient2: req.body.drinkIngredient2,
    drinkIngredient3: req.body.drinkIngredient3,
    drinkIngredient4: req.body.drinkIngredient4,
    drinkIngredient5: req.body.drinkIngredient5,
    drinkIngredient6: req.body.drinkIngredient6,
    drinkIngredient7: req.body.drinkIngredient7,
    drinkMeasurement1: req.body.drinkMeasurement1,
    drinkMeasurement2: req.body.drinkMeasurement2,
    drinkMeasurement3: req.body.drinkMeasurement3,
    drinkMeasurement4: req.body.drinkMeasurement4,
    drinkMeasurement5: req.body.drinkMeasurement5,
    drinkMeasurement6: req.body.drinkMeasurement6,
    drinkMeasurement7: req.body.drinkMeasurement7,
    drinkVideo: req.body.drinkVideo
  })
    .then(drinkData => res.json(drinkData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update a cocktail
router.put('/:id', async (req, res) => {
  try {
    const drinkData = await Cocktail.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!drinkData[0]) {
      return res.status(404).json({
        message: 'No cocktail found with this id',
      });
    }

    const updatedCocktail = await Cocktail.findByPk(
      req.params.id
    );

    res.json(updatedCocktail);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a cocktail by drink name
router.put('/name/:drinkName', async (req, res) => {
  try {
    const cocktail = await Cocktail.findOne({
      where: {
        drinkName: {
          [Op.iLike]: req.params.drinkName,
        },
      },
    });

    if (!cocktail) {
      return res.status(404).json({
        message: 'No cocktail found with this name',
      });
    }

    await cocktail.update(req.body);

    res.json(cocktail);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a cocktail
router.delete('/:id', async (req, res) => {
  try {
    const cocktail = await Cocktail.findByPk(req.params.id);

    if (!cocktail) {
      return res.status(404).json({ message: 'No cocktail found with this id' });
    }

    const drinkName = cocktail.drinkName;

    await Cocktail.destroy({
      where: {
        id: req.params.id
      }
    });

    res.json({
      drinkName
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete('/name/:drinkName', async (req, res) => {
  try {
    const cocktail = await Cocktail.findOne({
      where: {
        drinkName: {
          [Op.iLike]: req.params.drinkName,
        },
      },
    });

    if (!cocktail) {
      return res.status(404).json({
        message: 'No cocktail found with this name',
      });
    }

    const drinkName = cocktail.drinkName;

    await cocktail.destroy();

    res.json({
      drinkName,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
