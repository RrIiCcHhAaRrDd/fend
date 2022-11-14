const dotenv = require('dotenv');
dotenv.config();

var projectData = []


const express = require('express')
const cors = require('cors')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(cors())
app.use(express.json())

const path = require('path')

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html')) // this is correct
})


// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/getObject', function (req, res) {
    console.log("get req worked")
    res.send([projectData])
    console.log(Array.from(projectData))
})

app.post('/addObject', addAPISentiment);

function addAPISentiment(req, res) {
    //console.log(req.body)
    
    APIresults = {
        text: req.body.quote,
        score_tag: req.body.score_tag,
        subjectivity: req.body.subjectivity
    }

    projectData.unshift(APIresults)
    res.send([projectData])
    
}

app.get('/new', function (req, res){
    let data = process.env.API_KEY;
    res.send(data)
})


