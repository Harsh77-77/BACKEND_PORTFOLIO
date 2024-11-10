const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://harshsingh:ROdKGyPr3KV1hz7D@cluster0.aysdj.mongodb.net/";
const client = new MongoClient(uri);

module.exports = async (req, res) => {
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    await client.connect();
    console.log('Connected successfully to MongoDB');
    
    const database = client.db("contact_db");
    const contacts = database.collection("contacts");

    const { username, email, phone_no, message } = req.body;
    if (!username || !email || !phone_no || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    const result = await contacts.insertOne({ username, email, phone_no, message });
    console.log(`Inserted document with _id: ${result.insertedId}`);

    res.status(201).json({ message: 'Contact details saved successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error saving contact details', details: error.message });
  } finally {
    await client.close();
  }
};