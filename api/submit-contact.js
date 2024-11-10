const { MongoClient } = require('mongodb');
const cors = require('cors');

module.exports = async (req, res) => {
  // Handle CORS directly in the function
  res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-teal-eight-46.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    // MongoDB connection logic...
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
