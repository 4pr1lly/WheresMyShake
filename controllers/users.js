const User = require('../models').User;
const Review = require('../models').Reviews;





const index = (req, res) => {
    res.render('index.ejs') 
}

const renderSignup = (req, res) => {
    res.render('signup.ejs')
}

const signup = (req, res) => {
    User.create(req.body)
    .then(newusers => {
        res.redirect(`/users/profile/${newusers.id}`);
    })
}   
const renderLogin = (req, res) => {
    res.render('login.ejs') 
}

const login = (req, res) => {
    User.findOne({
        where: {
            username: req.body.username,
            password: req.body.password,
        }
    })
    .then(foundusers => {
        res.redirect(`/users/profile/${foundusers.id}`);
    })
}


const renderProfile = (req, res) => {
    console.log(req.user);
    console.log(`User id is ${req.user.id}`);
    User.findByPk(req.user.id,{
        include: [{
            model: Reviews,
            attributes: ['id','name']
        }]
    })
    .then(userProfile => {
        res.render('profile.ejs', {
            user: userProfile,
            token: req.query.token
        })
    })
}

const editProfile = (req, res) => {
    // console.log(req.params.index)
    User.update(req.body, {
        where: {id: req.params.index},
        returning: true
    })
    .then(updateUser => {
        res.redirect(`/users/profile/${req.params.index}`);
    })
}

const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/index');
    })
}

const logOutuser = (req, res) => {
    res.redirect('/users');

}

module.exports = {
    index,
    renderSignup,
    renderLogin,
    signup,
    login,
    renderProfile,
    editProfile,
    deleteUser,
    logOutuser

}