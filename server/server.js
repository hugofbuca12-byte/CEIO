const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Sample route
app.post('/api/contacto', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form submission:', { name, email, message });
  // Here you would typically save the data to the database
  res.status(200).json({ message: 'Form received successfully' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
