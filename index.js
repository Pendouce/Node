const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Import des routes
const linkRoutes = require("./routes/links");

// Logger (middelware : effectue avant le traitement de la requette recue)
// Ecris en console ce qui ce passe
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Route de base
app.get("/", (req, res) => {
  res.send("Bienvenue sur le mini reddit !");
});

// Monter les liens
app.use("/api/links", linkRoutes);

// Des que le serveur demmare on charge notre environnement
// et on ce connecte a la base de donnée
dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur a demmaré sur le port ${PORT}`);
});
