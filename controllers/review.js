const Reviews = require('../models').Reviews; 
const User= require('../models').User;
// const Shakes= require('../models').Shakes;

//handles index request

const index = (req, res) => {
    Reviews.findAll() 
    .then(allreviews => { 
        console.log(allreviews)
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
    // console.log(req.user.id)
    if(req.body.machineWorking ==='on'){
        req.body.IceAvailable = true;
    }else{
        req.body.IceAvailable =false;
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