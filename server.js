require('dotenv').config();

//imported express library
const express = require('express');
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');
const jwt=require('jsonwebtoken');

const app = express(); 
const routes= require ('./routes');


app.use (bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
app.use(express.static(__dirname + '/public'));


//responsible for  accepting and verifying JWT
const verifyToken = (req, res, next) => {
    let token = req.query.token;
    jwt.verify(
        token, process.env.JWT_SECRET,
        (err, decodedUser) => {
            if (err || !decodedUser){
              return res.status(401).json({ error: 'Unauthorized Request'});
            } 
            req.user = decodedUser;
            console.log(decodedUser);
            next();
          }
        )
      }
      
   


app.get('/',(req, res) =>{
    res.render('users/index.ejs');

})


//adding router object to middleware
app.use('/auth', routes.auth);//URL /users needs to go in the user router. 
app.use('/review', routes.reviews);
app.use('/users',verifyToken, routes.users);//for every API that starts with /users authorize the request (verify the JWT)




//app will run on port 3000
app.listen(process.env.PORT, () => {
    console.log('I am listening');
})







