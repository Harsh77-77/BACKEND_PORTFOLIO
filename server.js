// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Create MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost', // Your MySQL host
//   user: 'root',      // Your MySQL username
//   password: '12345',      // Your MySQL password
//   database: 'contact_db' // Your MySQL database name
// });

// // Connect to MySQL
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// // Endpoint to insert contact data
// app.post('/submit-contact', (req, res) => {
//   const { username, email, phone_no, message } = req.body;
//   const query = 'INSERT INTO contacts (username, email, phone_no, message) VALUES (?, ?, ?, ?)';
  
//   db.query(query, [username, email, phone_no, message], (err, result) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       res.status(500).send('Server error');
//     } else {
//       res.status(201).send('Contact details saved successfully');
//     }
//   });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });



// const express = require('express');
// const cors = require('cors');
// const path = require('path');
// const submitContact = require('./api/submit-contact');
// const setupMongoDB = require('./api/setup-mongodb');

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware
// app.use(express.json());
// app.use(cors({
//   origin: 'https://portfolio-teal-eight-46.vercel.app', 
//   methods: 'GET, POST, OPTIONS',
//   allowedHeaders: 'Content-Type, Authorization',
//   credentials: true // Ensure this is set to true for credentials
// }));

// // Routes
// app.post('/api/submit-contact', submitContact);

// // Health check route (optional)
// app.get('/', (req, res) => {
//   res.send('Server is running');
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
//   // Run MongoDB setup (for initial setup)
//   setupMongoDB();
// });


const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const submitContact = require('./submit-contact');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for CORS
app.use(cors({
  origin: 'https://portfolio-teal-eight-46.vercel.app', // Specify your frontend domain here
  methods: 'GET, POST, OPTIONS',
  allowedHeaders: 'Content-Type',
}));


// Middleware for parsing JSON
app.use(bodyParser.json());
app.use(express.json());

// Mount routes
app.use(submitContact);

// Handle preflight OPTIONS request globally
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'https://portfolio-teal-eight-46.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.sendStatus(200);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
