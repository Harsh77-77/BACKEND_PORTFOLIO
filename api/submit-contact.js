const { MongoClient } = require('mongodb');
const cors = require('cors');

const corsMiddleware = cors({
  origin: 'https://portfolio-teal-eight-46.vercel.app',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

const uri = "mongodb+srv://harshsingh:ROdKGyPr3KV1hz7D@cluster0.aysdj.mongodb.net/";
const client = new MongoClient(uri);

module.exports = async (req, res) => {
  await corsMiddleware(req, res, async () => {
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    if (req.method === 'POST') {
      const { username, email, phone_no, message } = req.body;
  
      if (!username || !email || !phone_no || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
      }

      try {
        await client.connect();
        console.log('Connected successfully to MongoDB');

        const database = client.db("contact_db");
        const contacts = database.collection("contacts");

        const result = await contacts.insertOne({ username, email, phone_no, message });
        console.log(`Inserted document with _id: ${result.insertedId}`);

        res.status(201).json({ message: 'Contact details saved successfully' });
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error saving contact details', details: error.message });
      } finally {
        await client.close();
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};