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
        connection = await mysql.createConnection({
          host: 'localhost', // Your MySQL host
          user: 'root',      // Your MySQL username
          password: '12345',      // Your MySQL password
          database: 'contact_db' 
        });

        const query = 'INSERT INTO contacts (username, email, phone_no, message) VALUES (?, ?, ?, ?)';
        await connection.execute(query, [username, email, phone_no, message]);

        res.status(201).json({ message: 'Contact details saved successfully' });
      } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ error: 'Error saving contact details', details: error.message });
      } finally {
        if (connection) await connection.end();
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  });
};