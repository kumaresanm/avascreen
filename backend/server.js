const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api', (req, res) => {
  res.send('API is running');
});

app.post('/chat', async (req, res) => {
    const { message } = req.body;
    const apiKey = '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';
    const requestData = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: message
        }
      ]
    };
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    };
    
    axios.post('https://api.openai.com/v1/chat/completions', requestData, config)
    .then(response => {
      const aiResponse = response.data.choices[0].text.trim();
      res.json({ message: aiResponse });
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ error: 'An error occurred' });
    });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
