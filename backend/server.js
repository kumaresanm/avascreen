const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');

const userData = require('./data').userData;
const reportData = require('./data').reportData;
const questionSetData = require('./data').questionSetData;
const userAnswersData = require('./data').userAnswersData;

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

    const requestData = {
      contents: [
          {
              parts: [
                  {
                      text: message
                  }
              ]
          }
      ]
  }
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
    
    axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyD3NEbEeaISMsLhR3l9KaKdLfIrNacYkrE', requestData, config)
    .then(response => {
      const aiResponse = response.data.candidates[0].content.parts[0].text;
      res.json({ message: aiResponse });
    })
    .catch(error => {
      console.error('Error:', error);
      const errorResp = error.message;
      res.status(429).json({ error: errorResp });
    });
});


// Endpoint to fetch User data
app.get('/api/users', (req, res) => {
  res.json(userData);
});

// Endpoint to fetch Report data
app.get('/api/reports', (req, res) => {
  res.json(reportData);
});

// Endpoint to fetch Question Set data
app.get('/api/questionsets', (req, res) => {
  res.json(questionSetData);
});

// Endpoint to fetch User Answers data
app.get('/api/useranswers', (req, res) => {
  res.json(userAnswersData);
});


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
