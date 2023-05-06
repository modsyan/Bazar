import { Router } from 'express'
import userController from '../controllers/userController';

Router()
  .route('/')
  .get(userController.getAllUsers);

// Router
//   .route('/:id')
//   .get()
//   .patch()
//   .delete()

module.exports = Router;