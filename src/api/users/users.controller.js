'use strict';
const userService = require('./users.service');
const {response} = require('../../utils');
const {statusCodes} = require('../../config');
const CONSTANTS = require('../../constants');

class UserController {}
UserController.createUser = async (req, res, next) => {
  try {
    const userNameExists = await userService.userNameExists(req?.body?.userName);
    if (userNameExists) {
      return response.error(req, res, statusCodes.HTTP_BAD_REQUEST, CONSTANTS.userNameExists);
    }

    // email Id Exists
    const emailIdExists = await userService.emailIdExists(req?.body?.emailId);
    if (emailIdExists) {
      return response.error(req, res, statusCodes.HTTP_BAD_REQUEST, CONSTANTS.emailIdExists);
    }

    let result = await userService.createUser(req?.body);
    return response.success(req, res, statusCodes.HTTP_CREATED, CONSTANTS.userCreated, result);
  } catch (error) {
    next(error);
  }
};

UserController.deleteUsersList = async (req, res, next) => {
  try {
    let data = await userService.deleteUsersList();
    return response.success(req, res, statusCodes.HTTP_OK, CONSTANTS.userListDeleted, data);
  } catch (error) {
    next(error);
  }
};

module.exports = UserController;
