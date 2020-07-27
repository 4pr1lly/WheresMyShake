const express = require('express')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const routes = require('./routes');



//middleware
//using body-parser to parse request data
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

//index
app.get('/index', (req, res) => {
    res.render('index.ejs') 
})

//add router object to middleware
app.use('/users', routes.users);//URL /users needs to go in the user router. 
app.use('/review', routes.review);



app.listen(3000, ()=>{
    console.log("I am listening");
});
