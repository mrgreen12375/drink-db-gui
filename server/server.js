const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API ROUTES
app.use(routes);

// SERVE REACT BUILD
app.use(express.static(path.join(__dirname, "../client/dist")));

// SPA FALLBACK (CRITICAL)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/dist/index.html"));
});

// DB + SERVER START
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
