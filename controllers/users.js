
const User = require('../models').User; 
const Reviews = require('../models').Reviews;




const renderProfile = (req, res) => {
    User.findByPk(req.user.id,{
        include: [{
            model: Reviews,
            attributes: ['id','name',"createdAt"]
        }]
    })
    .then(userProfile => {
        console.log(userProfile.Reviews)
        res.render('profile.ejs', {
            user: userProfile,
            token: req.query.token
        })
    })
}
   

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.index
        },
        returning:  true
    })
    .then(updatedUser => {
        res.redirect(`/users/profile/${req.params.index}/?token=${req.query.token}`);
    })
}
    


const deleteUser = (req, res) => {
    User.destroy({
        where: {
            id: req.params.index
        }
    })
    .then(() => {
        res.redirect('/');
    })
}

const logOutuser = (req, res) => {
    res.redirect('/users');
X
}







// const McDonaldsApi = require('mcdonalds-api')(<REGION>)
 
// const getLocations = async (latitude, longitude, radius, count) => {
//     const locations = await McDonaldsApi.getLocations(latitude, longitude, radius, count)
    
//     /* DO ANY MANIPULATION TO THE RESULTS HERE */
    
//     return locations
// }
   
    


module.exports = {
    renderProfile,
    editProfile,
    deleteUser,
    logOutuser
}