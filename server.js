const express = require('express');
const fs = require("fs").promises;
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
//const uri = "mongodb+srv://cgk:a9fZjxrf6Tkg1DFc@cluster0.zbsgz.mongodb.net/?retryWrites=true&w=majority";
const dbName = 'admin';

const app = express();
let db;

//const client = new MongoClient(uri, { useNewUrlParser: true });

//client.connect(err => {
//    if(err) throw err;
//    console.log("MongoDB connected...");
//});

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  if (err) throw err;
  console.log("Connected successfully to server");
  db = client.db(dbName);
});

app.use(express.static(path.resolve(__dirname, './build')));
app.get('/dashboardtree',async (req, res) => {
    const filePath = './build/index.html';
    console.log("work");
    try {
        console.log("working");
        res.sendFile(path.resolve(__dirname, './build', 'index.html'));
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
});

app.get('/api', (req, res) => {
//  const collection = client.db("luminor").collection("tree");
//  collection.find({}).toArray((err, result) => {
//      if (err) throw err;
//      res.json(result);
//  });  
    db.collection('tree').find({}).toArray((err, users) => {
        if (err) throw err;
        res.json(users);
      });
});

app.listen(3001, () => {
  console.log('Example app listening on port 3000!');
});