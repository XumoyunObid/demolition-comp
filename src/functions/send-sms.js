const twilio = require('twilio');

exports.handler = async function(event, context) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = twilio(accountSid, authToken);

  if (event.httpMethod === 'POST') {
    const { message, toPhoneNumber } = JSON.parse(event.body);

    try {
      const messageResponse = await client.messages.create({
        body: message,
        from: '+12193368192',
        to: toPhoneNumber,
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
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ success: false, message: 'Method not allowed' }),
    };
  }
};
