'use strict'

var express = require('express');
var userController = require('../controllers/userController');
var md_auth = require('../middlewares/authentication');

var api = express.Router();

api.post('/sign-up', userController.signUp);
api.post('/login', userController.login);
api.put('/:id', md_auth.ensureAuth, userController.editUser);
api.delete('/:id', md_auth.ensureAuth, userController.deleteUser);

module.exports = api;
