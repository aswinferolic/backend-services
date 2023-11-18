const express = require('express');
const router = express.Router();
const {helper} = require('../../utils');
const userController = require('./users.controller');
const userValidation = require('./users.validation');

router.post('/create', helper.joiValidate(userValidation.createUser), userController.createUser);
router.delete('/delete-list', userController.deleteUsersList);

module.exports = router;
