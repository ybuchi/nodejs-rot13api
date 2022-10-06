
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 8001;
const db = require('./queries')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))

app.get('/strings', db.getStrings)
app.post('/strings', db.postString)

app.listen(port, () => {
    console.log(`ROT-13 API is running on port ${port}.`)
})