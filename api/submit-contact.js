const cors = require('cors');
const mysql = require('mysql2');

const corsMiddleware = cors({
  origin: process.env.CORS_ORIGIN || 'https://portfolio-teal-eight-46.vercel.app',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

module.exports = (req, res) => {
  corsMiddleware(req, res, () => {
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }

    if (req.method === 'POST') {
      const { username, email, phone_no, message } = req.body;
  
      if (!username || !email || !phone_no || !message) {
        return res.status(400).json({ error: 'Please provide all required fields' });
      }

      const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      });

      const query = 'INSERT INTO contacts (username, email, phone_no, message) VALUES (?, ?, ?, ?)';
  
      db.query(query, [username, email, phone_no, message], (err, result) => {
        if (err) {
          console.error('Error inserting data:', err);
          res.status(500).json({ error: 'Error saving contact details' });
        } else {
          res.status(201).json({ message: 'Contact details saved successfully' });
        }
        db.end();
      });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};