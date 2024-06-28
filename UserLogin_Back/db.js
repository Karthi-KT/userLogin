const { MongoClient } = require("mongodb");

// Replace this with your MongoDB Atlas connection string
const uri =
  "mongodb+srv://mathtrainerkarthik:kCOokwnhcGyOe762@cluster0.nxfgu7b.mongodb.net/testPlatform?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbInstance;

// Function to connect to the database
async function connect() {
  if (!dbInstance) {
    try {
      await client.connect();
      console.log("Connected successfully to MongoDB");
      dbInstance = client.db(); // This will use the database from the URI
    } catch (err) {
      console.error("Failed to connect to MongoDB", err);
      throw err;
    }
  }
  return dbInstance;
}

// Function to get the database instance
async function getDb() {
  if (!dbInstance) {
    await connect();
  }
  return dbInstance;
}

module.exports = {
  connect,
  getDb,
};
