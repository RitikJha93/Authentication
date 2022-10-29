const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');
const router = express.Router()
//post routing for creating a new user
router.post('/validate',registerUser)
//post routing for authenticating a user
router.post('/login',authUser)
module.exports = router
