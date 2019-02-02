const express = require('express')
const middleware = require('@line/bot-sdk').middleware
const app = express()
const Client = require('@line/bot-sdk').Client;



const config = {
  channelAccessToken: 'y+ES/H/rQ7qnsxXtZuqRKvxvUfjjhmv2LDLAh6g3vSE9ZY7ZN2TnD5jQmie5lDlhA65deMnUhsjELyeirHrZ/dUbw22DQby7nH+4U6PnkJjvNvyBmOHZNTyuk6J/D87MxTWRbUekHPjhqPtIbtLHcAdB04t89/1O/w1cDnyilFU=',
  channelSecret: '625996762def6ffdb810d6ef869bd023'
}


const client = new Client(config);


app.post('/webhook', middleware(config), (req, res) => {
  res.send('Webhook success!')
  const event = req.body.events[0];
  
  if (event.type === 'message') {
    const message = event.message;
    console.log(message);
    client.replyMessage(event.replyToken, {
      type: 'text',
      text:'This is a '+ message.type,
    });
  }
})

app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})