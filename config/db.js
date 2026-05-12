const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGO_URI;
console.log("MongoDB URI:", uri);
const client = new MongoClient(uri);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("help-me-db");
  } catch (err) {
    console.error("Erreur MongoDB:", err);
    process.exit(1);
  }
};

const getDb = () => db;

module.exports = { connectDB, getDb };
