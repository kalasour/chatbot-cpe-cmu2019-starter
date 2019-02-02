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
        "thumbnailImageUrl": "https://scontent.fbkk14-1.fna.fbcdn.net/v/t1.0-9/49295993_383951468833228_334875838405148672_n.jpg?_nc_cat=100&_nc_ht=scontent.fbkk14-1.fna&oh=a31094d93c5289b4c55f59b8b6ecd974&oe=5CF25E4A",
        "imageAspectRatio": "rectangle",
        "imageSize": "cover",
        "imageBackgroundColor": "#000000",
        "title": "Rose",
        "text": "Kose Ruy",
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