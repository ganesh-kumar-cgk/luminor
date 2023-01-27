const functions = require('firebase-functions');
const express = require('express');
const path = require("path")
const fs = require("fs").promises;
const MongoClient = require('mongodb').MongoClient;
//const url = 'mongodb://localhost:27017';
const uri = "mongodb+srv://cgk:a9fZjxrf6Tkg1DFc@cluster0.zbsgz.mongodb.net/?retryWrites=true&w=majority";

const app = express();
const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
    if(err) throw err;
    console.log("MongoDB connected...");
});


app.get("/", async (req, res) => {
    const filePath = './web/index.html';
    try {
        let data = await fs.readFile(filePath, "utf-8");
        res.send(data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

app.get("/dashboard", async (req, res) => {
    const filePath = './web/index.html';
    try {
        let data = await fs.readFile(filePath, "utf-8");
        res.send(data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

app.get("/dashboardtree", async (req, res) => {
    const filePath = './web/index.html';
    try {
        let data = await fs.readFile(filePath, "utf-8");
        res.send(data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})
app.get('/api', (req, res) => {
  const collection = client.db("luminor").collection("tree");
  collection.find({}).toArray((err, result) => {
      if (err) throw err;
      res.json(result);
  });  
//    db.collection('tree').find({}).toArray((err, users) => {
//        if (err) throw err;
//        res.json(users);
//      });
});

exports.luminorApi = functions.https.onRequest(app);