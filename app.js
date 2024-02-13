
const express = require('express');
const bodyParser = require('body-parser');

//create express application by running express as function

const app = express();
app.use(bodyParser.urlencoded({extended: false})); 

// app.use((req, res, next)=>{
//     console.log("checking middleware");
//     next(); //allows request to continue to the next middleware
// })

// app.use((req, res, next)=>{
//     console.log("another middleware check");
//     res.send('<h1>Are you working?</h1>');
// })



// handling routes
// app.use('/add-product',(req, res, next)=>{
//     console.log("Simple middleware");
//     res.send('<h1>Add product page</h1>');
// });

// app.use('/',(req, res, next)=>{
//     console.log("another middleware");
//     res.send('<h1>empty page</h1>');
// })



//parsing incoming requests
app.use('/add-product',(req, res, next)=>{
    res.send("<form action='/product' method='POST'><input name='title' type='text'><button>add</button></form>");
});

app.use('/product',(req, res, next)=>{
        console.log(req.body);
        res.redirect('/');
    });

    app.use('/',(req, res, next)=>{
            res.send('<h1>Redirect page</h1>');
        });

//using express router. split routing codes into different files
//Example in app2


app.listen(4000);