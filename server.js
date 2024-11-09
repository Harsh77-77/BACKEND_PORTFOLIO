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









// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Middleware
// app.use(cors({
//   origin: 'https://portfolio-teal-eight-46.vercel.app',  // Remove the trailing slash
//   methods: ['GET', 'POST'],
//   credentials: true,
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

// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // CORS configuration to allow requests from the frontend domain
// app.use(cors({
//   origin: 'https://portfolio-teal-eight-46.vercel.app', // Add your frontend domain
//   methods: ['GET', 'POST'],
//   credentials: true,
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









// const express = require('express');
// const mysql = require('mysql2');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 5000;

// // Use CORS middleware with specific origin
// app.use(cors({
//   origin: 'https://portfolio-teal-eight-46.vercel.app', // Replace with your frontend URL
//   methods: 'GET, POST, OPTIONS',
//   allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
// }));

// // Middleware for parsing JSON
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

// // Preflight (OPTIONS) request handling
// app.options('*', (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-teal-eight-46.vercel.app'); // Allow specific origin
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allow specific methods
//   res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Allow specific headers
//   res.status(200).end(); // Respond with a 200 status
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
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
  origin: 'https://portfolio-teal-eight-46.vercel.app',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

app.use(express.json());

// MySQL connection (make sure to use environment variables for sensitive information)
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'contact_db'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Submit contact form endpoint
app.post('/api/submit-contact', (req, res) => {
  const { username, email, phone_no, message } = req.body;
  
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Log to check if the server is running
console.log('Server is starting...');