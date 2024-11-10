module.exports = async (req, res) => {
  try {
    // Existing database connection logic
    await client.connect();
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
    console.error('Error in submit-contact:', error); // Log detailed error
    res.status(500).json({ error: 'Error saving contact details', details: error.message });
  } finally {
    await client.close();
  }
};

