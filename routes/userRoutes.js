const express = require ('express');
const { getAllUsers, registerController, loginController } = require('../controllers/userController');

//router object
const router = express.Router()

//get all users with get method
router.get('/all-users',getAllUsers);

//create users with post method
router.post('/register', registerController);

//login with post method
router.post('/login',loginController);

module.exports = router;