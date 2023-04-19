const Router = require("express").Router();
const userController = require('../controllers/userController');

Router
  .route('/')
  .get(userController.getAllUsers);

// Router
//   .route('/:id')
//   .get()
//   .patch()
//   .delete()

module.exports = Router;