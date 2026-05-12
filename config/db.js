const { MongoClient, ObjectId } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

const connectDB = async () => {
  try {
    await client.connect();
    db = client.db("myapp");
  } catch (err) {
    console.error("Erreur MongoDB:", err);
    process.exit(1);
  }
};

const getDb = () => db;

module.exports = { connectDB, getDb };
