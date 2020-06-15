var express = require('express');
var app = express();
var bodyParser = require("body-parser");

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. */


/** 2) A first working Express Server */


/** 3) Serve an HTML file */


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */


/** 6) Use the .env file to configure the app */


/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */


/** 9)  Get input from client - Route parameters */


/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>


/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active/**
app.listen(process.env.PORT || 80);

console.log("Hello World")

//---------- DO NOT EDIT BELOW THIS LINE --------------------

module.exports = app;


//app.get("/", (req, res) => {
//    res.send("Hello Express");
//});

absolutePath = __dirname + /views/index.html;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    if (process.env.MESSAGE_STYLE === uppercase) {
        response = "Hello World".toUpperCase();
        res.json({
            "message": response
        })
    } else {
        res.json({
            "message": "Hello json"
        })
    }
})


app.use(function middleware(req, res, next) {
    var string = req.method + " " + req.path + " - " + req.ip;
    console.log(string)
    next();
});


app.get('/now', function (req, res, next) {
    req.time = new Date().toString();
    next();
}, function (req, res) {
    res.send({
        time: req.time
    });
});

app.get("/:word/echo", (req, res) => {
    const {
        word
    } = req.params;
    res.json({
        echo: word
    })
})

app.get("/name", (req, res) => {
    var firstName = req.query.first;
    var lastName = req.query.last;
    res.json({
        name: `${firstName} ${lastName}`
    })
})

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.post("/name", function (req, res) {
    // Handle the data in the request
    var string = req.body.first + " " + req.body.last;
    res.json({
        name: string
    });
});