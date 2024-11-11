// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://harshsingh:ROdKGyPr3KV1hz7D@cluster0.aysdj.mongodb.net/";
// const client = new MongoClient(uri);
// const cors = require('cors');

// module.exports = async (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-teal-eight-46.vercel.app');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   res.setHeader('Access-Control-Allow-Credentials', 'true'); // Include this header

//   if (req.method === 'OPTIONS') {
//     return res.status(200).end();
//   }

//   try {
//     // Database connection and logic...
//     await client.connect();
//     console.log('Connected successfully to MongoDB');

//     const database = client.db("contact_db");
//     const contacts = database.collection("contacts");

//     const { username, email, phone_no, message } = req.body;
//     if (!username || !email || !phone_no || !message) {
//       return res.status(400).json({ error: 'Please provide all required fields' });
//     }

//     const result = await contacts.insertOne({ username, email, phone_no, message });
//     console.log(`Inserted document with _id: ${result.insertedId}`);

//     res.status(201).json({ message: 'Contact details saved successfully' });
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Error saving contact details', details: error.message });
//   } finally {
//     await client.close();
//   }
// };



const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin: 'https://portfolio-teal-eight-46.vercel.app', // Allow only your frontend origin
  methods: 'GET,POST',
  allowedHeaders: 'Content-Type',
  credentials: true // If your request uses cookies or HTTP authentication
}));

// Create MySQL connection
const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12744074',
  password: 'aXcfgetGU3',
  database: 'sql12744074',
  port: 3306
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Endpoint to insert contact data
app.post('/submit-contact', (req, res) => {
  const { username, email, phone_no, message } = req.body;
  const query = 'INSERT INTO contacts (username, email, phone_no, message) VALUES (?, ?, ?, ?)';
  
  db.query(query, [username, email, phone_no, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send({ error: 'Server error', details: err.message });
    } else {
      res.status(201).send({ message: 'Contact details saved successfully' });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
