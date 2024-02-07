import express from 'express';
import * as userController from '../controllers/user.controller';
import { newUserValidator,newAdminValidator } from '../validators/user.validator';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//route to create a new user
router.post('', newUserValidator, userController.userRegistration);

//route to login user
router.post('/login', userController.loginUser);

router.post('/adminRegistration', newAdminValidator, userController.adminRegistration);

router.get('',userAuth, userController.getUserdetails)

export default router;
