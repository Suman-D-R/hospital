import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

// Function to create a new user
export const createUser = async (req, res) => {
    try {
        const newUser = await UserService.createUser(req.body);
        res.status(HttpStatus.CREATED).json(newUser);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

// Function to get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(HttpStatus.OK).json(users);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

// Function to get a specific user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.userId);
        res.status(HttpStatus.OK).json(user);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};

// Function to update a user by ID
export const updateUserById = async (req, res) => {
    try {
        const updatedUser = await UserService.updateUserById(req.params.userId, req.body);
        res.status(HttpStatus.OK).json(updatedUser);
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({ error: error.message });
    }
};

// Function to delete a user by ID
export const deleteUserById = async (req, res) => {
    try {
        const deletedUser = await UserService.deleteUserById(req.params.userId);
        res.status(HttpStatus.OK).json(deletedUser);
    } catch (error) {
        res.status(HttpStatus.NOT_FOUND).json({ error: error.message });
    }
};
