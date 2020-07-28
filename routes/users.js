const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.users.index);
router.get('/signup', ctrl.users.renderSignup);
router.post('/', ctrl.users.signup);
router.get('/login', ctrl.users.renderLogin);
router.post('/login', ctrl.users.login);
router.get('/profile/:index', ctrl.users.renderProfile);
router.put('/profile/:index', ctrl.users.editProfile);
router.delete('/profile/:index', ctrl.users.deleteUser);
router.get('/logout',ctrl.users.logOutuser);


module.exports = router;
