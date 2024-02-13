const express = require('express');
const path = require ('path');
const adminData = require('./routes/Admin');
const store = require('./routes/store');
const bodyParser = require('body-parser');
const app2 = express();

app2.use(bodyParser.urlencoded({extended: false}));
app2.set("view engine", "pug");
app2.set('views', 'views');
app2.use(adminData.routes);
app2.use(store);
app2.use(express.static(path.join(__dirname, 'public')));
 
//add error 404-page not found for a non existent route
app2.use((req, res, next) => {
    res.status(404).render('404', {pageTitle: "404 page not found"});
});





app2.listen(3000);