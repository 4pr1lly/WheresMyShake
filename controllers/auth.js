require('dotenv').config()

const User = require('../models').User;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const renderSignup = (req, res) => {
    res.render('users/signup.ejs', {
        msg: ''
    })
}

const signup = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {// salt is a unique value you add to the password to make it more unique
        if (err) return res.status(500).json(err);// "500" means internal server error in https
        
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {//password+ salt = hashedPwd
            if (err) return res.status(500).json(err);
            req.body.password = hashedPwd;
    


            User.create(req.body) //This saves in the database
            .then(newUser => {

                const token = jwt.sign(
                    {
                        username: newUser.username, //this is the payload
                        id: newUser.id
                    },
                    process.env.JWT_SECRET,//secret key
                    {
                      expiresIn: "30 days"
                    },
                );


                console.log(token);
                res.redirect(`/users/profile/${newUser.id}/?token=${token}`);
            })
            .catch(err => {
                console.log(err);
                res.send(`err ${err}`);
            })
        });
    });
}



const renderLogin = (req, res) => {
    res.render('users/login.ejs')
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(foundUser => {
        if(foundUser){
            bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
                if (match) {


                    const token = jwt.sign(
                        {
                          username: foundUser.username,
                          id: foundUser.id
                        },
                        process.env.JWT_SECRET,
                        {
                          expiresIn: "30 days"
                        },
                    )
                        console.log('Token: ${token}')
                    res.redirect(`/users/profile/${foundUser.id}/?token=${token}`);
                } else {
                  res.send("Incorrect password");
                }
            })
        }
    })
}







module.exports = {
    renderSignup,
    renderLogin,
    signup,
    login,
    
}















// const renderNew = (req, res) => {
//     res.render('new.ejs');

// }

// const postReviews = (req, res)=> {
//     // console.log(req.user.id)
//     if(req.body.machineWorking ==='on'){
//         req.body.IceAvailable = true;
//     }else{
//         req.body.IceAvailable =false;
//     }

//     Reviews.create(req.body)
//     .then(newReviews  => {
//         res.redirect('/review');
//     })

//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     })
//     .then(foundUser => {
//         if(foundUser){
//             bcrypt.compare(req.body.password, foundUser.password, (err, match) => {
//                 if (match) {


//                     const token = jwt.sign(
//                         {
//                           username: foundUser.username,
//                           id: foundUser.id
//                         },
//                         process.env.JWT_SECRET,
//                         {
//                           expiresIn: "30 days"
//                         },
//                     )
//                         console.log('Token: ${token}')
//                     res.redirect(`/users/profile/${foundUser.id}/?token=${token}`);
//                 } else {
//                   res.send("Incorrect password");
//                 }
//             })
//         }
//     })
   
    
// }


