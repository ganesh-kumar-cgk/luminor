const functions = require('firebase-functions');
const express = require('express');
const path = require("path")
const fs = require("fs").promises;

const app = express();


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
app.get("/dashtree", async (req, res) => {
    const filePath = './web/index.html';
    try {
        let data = await fs.readFile(filePath, "utf-8");
        res.send(data)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

exports.luminorApi = functions.https.onRequest(app);