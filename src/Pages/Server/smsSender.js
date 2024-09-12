// server/smsSender.js

const twilio = require('twilio');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Twilio credentials
const accountSid = 'AC238f19e6cfd2164bb886682ae360f43d';
const authToken = '4f5417e666a579b1fecaffd975fa655e';
const client = twilio(accountSid, authToken);

app.post('/api/send-sms', (req, res) => {
  const { to, message } = req.body;

  client.messages
    .create({
      body: message,
      from: '+18652776188',
      to: '+998914766621'
    })
    .then(message => res.json({ success: true, messageSid: message.sid }))
    .catch(error => res.status(500).json({ success: false, error }));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
