const connectToMongo = require('./dbs');
const express = require('express');

connectToMongo(); // Run connectToMongo() here

const app = express()
const port = 8088

// pass the Json
app.use(express.json()) // without this you can not send req.body (json)

// Avaible Routes is here-
app.use('/api/contents', require('./routes/notes')) // Link the API to the Routes
// app.use('/api/upload', require('./routes/upload'));

app.listen(port, () => {
  console.log(`BVS-To-Do-book app listening on port ${port}`)
})