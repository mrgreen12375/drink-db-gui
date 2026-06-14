const router = require("express").Router();
const { Op } = require("sequelize");
const { Cocktail } = require("../../models");

// get all cocktails
router.get("/", async (req, res) => {
  try {
    const drinkData = await Cocktail.findAll();

    res.json(drinkData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get cocktail by drink name
router.get("/name/:drinkName", async (req, res) => {
  try {
    const drinkData = await Cocktail.findOne({
      where: {
        drinkName: {
          [Op.iLike]: req.params.drinkName,
        },
      },
    });

    if (!drinkData) {
      return res.status(404).json({
        message: "No cocktail found with this name",
      });
    }

    res.json(drinkData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get cocktail by alcohol name
router.get("/alcohol/:drinkIngredient1", async (req, res) => {
  try {
    const drinkData = await Cocktail.findAll({
      where: {
        drinkIngredient1: {
          [Op.iLike]: req.params.drinkIngredient1,
        },
      },
    });

    if (drinkData.length === 0) {
      return res.status(404).json({
        message: "No cocktails found with this alcohol",
      });
    }

    res.json(drinkData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get one cocktail
router.get("/:id", async (req, res) => {
  try {
    const drinkData = await Cocktail.findByPk(req.params.id);

    if (!drinkData) {
      return res.status(404).json({
        message: "No cocktail found with this id",
      });
    }

    res.json(drinkData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// create a cocktail
router.post("/", async (req, res) => {
  try {
    const drinkData = await Cocktail.create(req.body);

    res.json(drinkData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a cocktail by name
router.put("/name/:drinkName", async (req, res) => {
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
        message: "No cocktail found with this name",
      });
    }

    await cocktail.update(req.body);

    res.json(cocktail);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// update a cocktail
router.put("/:id", async (req, res) => {
  try {
    const drinkData = await Cocktail.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!drinkData[0]) {
      return res.status(404).json({
        message: "No cocktail found with this id",
      });
    }

    const updatedCocktail = await Cocktail.findByPk(req.params.id);

    res.json(updatedCocktail);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a cocktail by name
router.delete("/name/:drinkName", async (req, res) => {
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
        message: "No cocktail found with this name",
      });
    }

    const drinkName = cocktail.drinkName;

    await cocktail.destroy();

    res.json({
      message: `${drinkName} deleted successfully`,
      drinkName,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// delete a cocktail
router.delete("/:id", async (req, res) => {
  try {
    const cocktail = await Cocktail.findByPk(req.params.id);

    if (!cocktail) {
      return res.status(404).json({
        message: "No cocktail found with this id",
      });
    }

    const drinkName = cocktail.drinkName;

    await cocktail.destroy();

    res.json({
      message: `${drinkName} deleted successfully`,
      drinkName,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
