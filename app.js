import express from "express";

const app = express();

//Chargement du fichier .env dans les variables d'environnement
(async () => {
  await process.loadEnvFile(".env");
  console.log(".env chargé"); // Affiche la valeur depuis .env
})();

app.listen(process.env.PORT, () => {
  console.log("Server is running on http://localhost:" + process.env.PORT);
});
