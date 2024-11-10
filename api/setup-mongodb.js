const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://harshsingh:ROdKGyPr3KV1hz7D@cluster0.aysdj.mongodb.net/";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    console.log("Connected successfully to MongoDB");

    const database = client.db("contact_db");
    const contacts = database.collection("contacts");

    // Insert a test document
    const testContact = {
      username: "Test User",
      email: "test@example.com",
      phone_no: "1234567890",
      message: "This is a test message"
    };
    const result = await contacts.insertOne(testContact);
    console.log(`Inserted test document with _id: ${result.insertedId}`);

    // Find the test document
    const foundContact = await contacts.findOne({ username: "Test User" });
    console.log("Found test document:", foundContact);

  } finally {
    await client.close();
  }
}

run().catch(console.error);