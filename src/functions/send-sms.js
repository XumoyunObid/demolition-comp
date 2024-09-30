const twilio = require('twilio');

// Twilio credentials
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

exports.handler = async (event, context) => {
  const { phone, name, appointmentDate } = JSON.parse(event.body);

  try {
    // Send SMS using the content template
    const messageResponse = await client.messages.create({
      to: phone,
      messagingServiceSid: 'MG6e4e9a52e54392e78e4f41abf7d4a48e',  // Your Twilio Messaging Service SID
      body: `Hello, your appointment is confirmed for {{1}}.`,  // Use your template structure here
      contentSid: 'HX63ddc73307402b5202852deeb3e9d9d8',  // Use your Content Template SID
      contentVariables: JSON.stringify({  // Replace dynamic placeholders in the template
        1: appointmentDate,
      }),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, sid: messageResponse.sid }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: error.message }),
    };
  }
};
