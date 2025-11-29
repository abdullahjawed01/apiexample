import twilio from 'twilio';

const accountSid = "AC604a9df47ce55475b71bfc8b70b95f0c"
const authToken = "4b28c8637c7873b903e84a058e68b0bc"
const client = twilio(accountSid, authToken);

client.messages
    .create({
        body: 'Hello from Twilio!',
        from: '+14144090659',
        to: '+919618211626'
    })
    .then(message => console.log(`Message sent with SID: ${message.sid}`))
    .catch(error => console.error('Error  message:'));

export default client.messages