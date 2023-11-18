const {users} = require('../../database/mongodb/models');

class UserService {}

UserService.userNameExists = async (userName) => {
  try {
    let data = await users.findOne({userName: userName});
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

UserService.emailIdExists = async (emailId) => {
  try {
    let data = await users.findOne({emailId: emailId});
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

UserService.createUser = async (payload) => {
  try {
    let data = await users.create(payload);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

UserService.deleteUsersList = async () => {
  try {
    await users.deleteMany();
    let data = users.find();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
module.exports = UserService;
