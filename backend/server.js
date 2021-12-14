var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({extended: true})
)

const mongoURI = 'mongodb://localhost:27017/Task';
mongoose.connect(mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify :false })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./route/api')
app.use('/users', Users)




app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})
