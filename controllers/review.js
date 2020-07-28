const Reviews = require('../models').Reviews; 
const User= require('../models').User;
const Shakes= require('../models').Shakes;

//handles index request
const index = (req, res) => {
    Reviews.findAll() //return a promise object (sequelize)
    .then(allreviews => { // if success store fruits in fruits variable
           res.render('index.ejs', { //render template
            reviews : allreviews // pass along all the fruits in the Fruits(sequelized) table
     });
    })

    
} 

const show = (req, res) => {
    Reviews.findByPk(req.params.index,{
        include : [User]
        
    })
    .then(foundReviews => {
        res.render ('show.ejs', {
        reviews: foundReviews
        });
    })


}

const renderNew = (req, res) => {
    res.render('new.ejs');

}

const postReviews = (req, res)=> {
    if(req.body.readyToEat ==='on'){
        req.body.readyToEat = true;
    }else{
        req.body.readyToEat =false;
    }

    Reviews.create(req.body)
    .then(newReviews => {
        res.redirect('/reviews');
    })
  
    
}


const indexDelete = (req, res) => {
    Reviews.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/reviews')
    })
 
}

const renderEdit = (req, res) => {
    Reviews.findByPk(req.params.index)
    .then(foundReviews => {
        Season.findAll()
        .then(allShakes => {
            res.render('edit.ejs', {
                review: foundReviews,
                shakes: allShakes
            });
        })
    })
}

const editReviews = (req, res) => {
    if(req.body.readyToEat ==="on"){
        req.body.readyToEat = true;
    }else{
        req.body.readyToEat =false;
    }
    Reviews.update(req.body,{
        where: {id: req.params.index},
        returning: true //update to send back the updated Fruit object
    })
    .then(updatedReviews => {
        Season.findByPk(req.body.season)//2nd step
        .then(foundSeason => {
            Reviews.findByPk(req.params.index) //3rd step
            .then(foundReviews => {
                foundReviews.addSeason(foundSeason); //4th step adds to the join table
            res.redirect('/reviews');
    })
})
})

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