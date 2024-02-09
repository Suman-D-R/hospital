import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator,newAdminValidator ,newDocterValidator} from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// Route to create a new user patient
router.post('/',newUserValidator, userController.createUser);

// Route to create a new user docter
router.post('/docter',newDocterValidator, userController.createUser);

// Route to create a new user admin
router.post('/admin',newAdminValidator, userController.createUser);

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a specific user by ID
router.get('/:userId', userController.getUserById);

// Route to update a user by ID
router.put('/:userId', userController.updateUserById);

// Route to delete a user by ID
router.delete('/:userId', userController.deleteUserById);


export default router;
