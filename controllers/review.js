const Reviews = require('../models').Reviews; //comparable to Fruits
const User= require('../models').User;
const Shakes= require('../models').Shakes;

//handles index request

const index = (req, res) => {
    Reviews.findAll() 
    .then(allreviews => { 
           res.render('index.ejs', { 
            review: allreviews
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
    res.render('new.ejs');

}

const postReviews = (req, res)=> {
    if(req.body.machineWorking ==='on'){
        req.body.machineWorking = true;
    }else{
        req.body.machineWorking =false;
    }

    Reviews.create(req.body)
    .then(newReviews  => {
        res.redirect('/review');
    })
   
    
}


const indexDelete = (req, res) => {
    Reviews.destroy({
        where: {id: req.params.index}
    })
    .then(() => {
        res.redirect('/review')
    })
}
   

const renderEdit = (req, res) => {
    Reviews.findByPk(req.params.index)
    .then(foundReviews => {
        Shakes.findAll()
        .then(allShakes => {
            res.render('edit.ejs', {
                review: foundReviews,
                shakes: allShakes
            });
        })
    })
}



const editReviews = (req, res) => {
    if(req.body.machineWorking ==="on"){
        req.body.machingWorking = true;
    }else{
        req.body.machingWorking =false;
    }
    Reviews.update(req.body,{
        where: {id: req.params.index},
        returning: true 
    })
    .then(updatedReviews => {
        Shakes.findByPk(req.body.shakes)//2nd step
        .then(foundShakes => {
            Reviews.findByPk(req.params.index) //3rd step
            .then(foundReview => {
                foundReview.addShakes(foundShakes); //4th step adds to the join table
            res.redirect('/review');
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