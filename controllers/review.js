// const Review = require('../models').Review;



const createReview =(req,res)=> {
    req.body.userId= req.params.userId //this links review to user. this is a variable that can be used anywhere
    Review.create(req.body)
    .then(newReview => {
        res.redirect(`/users/profile/${req.params.userId}`)
    })
}



module.exports = {
    review,
    createReview,
    
}