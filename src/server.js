const express = require('express');
const fs = require("fs").promises;
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'admin';

const app = express();
let db;

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log("Connected successfully to server");
  db = client.db(dbName);
});


app.get('/dashboardtree',async (req, res) => {
    const filePath = './web/index.html';
    try {
        let data = await fs.readFile(filePath, "utf-8");
        data = data.replace(/\$TITLE/g, "FlutterFarm - Custom Software Development Solutions for Mobile, Web and Desktop Application");
        data = data.replace(/\$OG_TITLE/g, "FlutterFarm - Custom Software Development Solutions for Mobile, Web and Desktop Application");  
        data = data.replace(/\$KEYWORDS/g, "mobile application companies,mobile web developer,a mobile app,web development and mobile development,mobile app development company in united states,mobile app and website,website and app design company,develop website and mobile app,application development companies,best mobile app development companie");          
        data = data.replace(/\$OG_DESCRIPTION/g, "FlutterFarm is Finest Custom software development company we have well trained team with expertise in Flutter, a Google Framework to build solutions for mobile, web and desktop with the same code base.");  
        data = data.replace(/\$DESCRIPTION/g, "FlutterFarm is Finest Custom software development company we have well trained team with expertise in Flutter, a Google Framework to build solutions for mobile, web and desktop with the same code base.");  
        data = data.replace(/\$OG_IMAGE/g, "https://flutterfarm.dev/assets/img/og-img.png");  
        data = data.replace(/\$OG_URL/g, "https://flutterfarm.dev/");                                  
        res.send(data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
});

app.get('/api', (req, res) => {
    db.collection('tree').find({}).toArray((err, users) => {
        if (err) throw err;
        res.json(users);
      });
});

app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
});
