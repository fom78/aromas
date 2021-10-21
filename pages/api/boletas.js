import { MongoClient } from 'mongodb'

// Connection URL
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
// Database Name
const dbName = 'profut';

export default async (req, res) => {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);


  const boletas = await db
    .collection("boletas")
    .find({})
    .sort({ metacritic: -1 })
    .limit(2)
    .toArray();
  res.json(boletas);
};