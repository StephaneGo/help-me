const load = async () => {
  await process.loadEnvFile(".env");
  console.log(".env chargé"); // Affiche la valeur depuis .env
};

module.exports = { load };
