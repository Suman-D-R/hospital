import express from 'express';
import * as userController from '../controllers/user.controller';
import {
  newUserValidator,
  newAdminValidator,
  newDocterValidator
} from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';
import passport from '../config/passport';
import jwt from 'jsonwebtoken';

const router = express.Router();

// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {

//     // Successful authentication, redirect to home or send response as needed.
//     res.redirect('/');
//   });

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {successRedirect: 'http://localhost:5174/home', failureRedirect: '/login' }),
  function (req, res) {
    const token = jwt.sign({ _id: req.user._id, username: req.user.username }, process.env.SECRET_KEY, { expiresIn: '1h' });
    
    res.json({ token });

  }
);

// Route to create a new user patient
router.post('/', newUserValidator, userController.createUser);

router.post('/login',userController.loginUser)

// Route to create a new user docter
router.post('/doctor', newDocterValidator, userController.createUser);

// Route to create a new user admin
router.post('/admin', newAdminValidator, userController.createUser);

// Route to get all users
router.get('/', userController.getAllUsers);

// Route to get a specific user by ID
router.get('/:userId', userController.getUserById);

// Route to update a user by ID
router.put('/:userId', userController.updateUserById);

// Route to delete a user by ID
router.delete('/:userId', userController.deleteUserById);

export default router;
