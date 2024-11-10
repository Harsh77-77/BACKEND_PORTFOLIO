const cors = require('cors');
const mysql = require('mysql2/promise');

const corsMiddleware = cors({
  origin: 'https://portfolio-teal-eight-46.vercel.app',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});

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

      let connection;
      try {
        console.log('Attempting to connect to database...');
        connection = await mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '12345',
          database: 'contact_db'
        });
        console.log('Database connection successful');

        const query = 'INSERT INTO contacts (username, email, phone_no, message) VALUES (?, ?, ?, ?)';
        console.log('Executing query:', query);
        console.log('Query parameters:', [username, email, phone_no, message]);
        
        await connection.execute(query, [username, email, phone_no, message]);
        console.log('Query executed successfully');

        res.status(201).json({ message: 'Contact details saved successfully' });
      } catch (error) {
        console.error('Detailed error:', error);
        res.status(500).json({ error: 'Error saving contact details', details: error.message, stack: error.stack });
      } finally {
        if (connection) {
          console.log('Closing database connection');
          await connection.end();
        }
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};