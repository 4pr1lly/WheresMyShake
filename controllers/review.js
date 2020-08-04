const Reviews = require('../models').Reviews; 
const User= require('../models').User;
// const Shakes= require('../models').Shakes;

//handles index request

const index = (req, res) => {
    console.log(req.params.userId)
    Reviews.findAll() 
    .then(allreviews => { 
        console.log(allreviews)
           res.render('index.ejs', { 
            review: allreviews,
            token:req.query.token,
            userId:req.params.userId

     });
    })

    
} 

const show = (req, res) => {
    Reviews.findByPk(req.params.index,{
        include : [User]
        
    })
    .then(foundReviews => {
        res.render ('show.ejs', {
            review: foundReviews
        });
    })


}

const renderNew = (req, res) => {
    console.log(req.params.userId)
    res.render('new.ejs',{
        userId:req.params.userId

    });
}

const postReviews = (req, res)=> {
    // console.log(req.user.id)
    if(req.body.machineWorking ==='on'){
        req.body.IceAvailable = true;
    }else{
        req.body.IceAvailable =false;
    }
    req.body.userId=req.params.userId
    Reviews.create(req.body)
    .then(newReviews  => {
        res.redirect(`/review/${req.params.userId}`);
    })
}


const indexDelete = (req, res) => {
    Reviews.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect(`/review/${req.params.userId}`);

    })
}
   

const renderEdit = (req, res) => {
    Reviews.findByPk(req.params.index)
    .then(foundReviews => {
            res.render('edit.ejs', {
                review: foundReviews,
                
            });
        })
    // })
}


const editReviews = (req, res) => {
    if(req.body.machineWorking ==="on"){
        req.body.machineWorking = true;
    }else{
        req.body.machineWorking =false;
    }
    Reviews.update(req.body,{
        where: {id: req.params.index},
        returning: true
    })
            res.redirect('/review');
    
}


module.exports = {
    index,
    show,
    renderNew,
    postReviews,
    indexDelete,
    renderEdit,
    editReviews
}