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
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173', // Adjust this to match your Vite dev server port
//   methods: ['GET', 'POST'],
//   credentials: true
// }));
// app.use(bodyParser.json());

// // Create MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '12345',
//   database: 'contact_db'
// });

// // Connect to MySQL
// db.connect(err => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//   } else {
//     console.log('Connected to MySQL database');
//   }
// });

// // Root route handler
// app.get('/', (req, res) => {
//   res.json({ message: 'Welcome to the Contact Form API' });
// });

// // Test route to check if server is running
// app.get('/api/test', (req, res) => {
//   res.json({ message: 'API is working!' });
// });

// // Endpoint to insert contact data
// app.post('/api/submit-contact', (req, res) => {
//   const { username, email, phone_no, message } = req.body;
  
//   // Validate required fields
//   if (!username || !email || !phone_no || !message) {
//     return res.status(400).json({ error: 'Please provide all required fields' });
//   }

//   const query = 'INSERT INTO contacts (username, email, phone_no, message) VALUES (?, ?, ?, ?)';
  
//   db.query(query, [username, email, phone_no, message], (err, result) => {
//     if (err) {
//       console.error('Error inserting data:', err);
//       res.status(500).json({ error: 'Error saving contact details' });
//     } else {
//       res.status(201).json({ message: 'Contact details saved successfully' });
//     }
//   });
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: 'Something broke!' });
// });

// // Handle 404 routes
// app.use((req, res) => {
//   res.status(404).json({ error: 'Route not found' });
// });

// // Start server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });









const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors({
  origin:  'https://portfolio-teal-eight-46.vercel.app/', // Adjust this to match your Vite dev server port'http://localhost:4000',
  methods: ['GET', 'POST'],
  credentials: true
}));
app.use(bodyParser.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'contact_db'
});

// Connect to MySQL
db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Root route handler
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Contact Form API' });
});

// Test route to check if server is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

// Endpoint to insert contact data
app.post('/api/submit-contact', (req, res) => {
  const { username, email, phone_no, message } = req.body;
  
  // Validate required fields
  if (!username || !email || !phone_no || !message) {
    return res.status(400).json({ error: 'Please provide all required fields' });
  }

  const query = 'INSERT INTO contacts (username, email, phone_no, message) VALUES (?, ?, ?, ?)';
  
  db.query(query, [username, email, phone_no, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error saving contact details' });
    } else {
      res.status(201).json({ message: 'Contact details saved successfully' });
    }
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Handle 404 routes
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});