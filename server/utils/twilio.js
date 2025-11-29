import twilio from 'twilio';


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