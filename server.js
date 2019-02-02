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
      "type": "template",
      "altText": "This is a buttons template",
      "template": {
        "type": "buttons",
        "thumbnailImageUrl": "https://vignette.wikia.nocookie.net/line/images/b/bb/2015-brown.png/revision/latest?cb=20150808131630",
        "imageAspectRatio": "rectangle",
        "imageSize": "cover",
        "imageBackgroundColor": "#FFFFFF",
        "title": "Menu",
        "text": "Please select",
        "defaultAction": {
          "type": "uri",
          "label": "View detail",
          "uri": "http://google.com/"
        },
        "actions": [{
            "type": "postback",
            "label": "Buy",
            "data": "action=buy&itemid=123"
          },
          {
            "type": "message",
            "label": "Add to cart",
            "text": "no no no"
          },
          {
            "type": "uri",
            "label": "View detail",
            "uri": "http://google.com"
          }
        ]
      }
    })
  }
})

app.get('/', function (req, res) {
  res.send('Hello World!!')
})

app.set('port', (process.env.PORT || 4000))

app.listen(app.get('port'), function () {
  console.log('run at port', app.get('port'))
})