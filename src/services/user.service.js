import User from '../models/user.model';

// Function to create a new user
export const createUser = async (userData) => {
    try {
        const data = await User.create(userData);
        console.log(data)
        return data
    } catch (error) {
        throw error;
    }
};

// Function to get all users
export const getAllUsers = async () => {
    try {
        return await User.find();
    } catch (error) {
        throw error;
    }
};

// Function to get a specific user by ID
export const getUserById = async (userId) => {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    } catch (error) {
        throw error;
    }
};

// Function to update a user by ID
export const updateUserById = async (userId, userData) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, userData, { new: true });
        if (!updatedUser) {
            throw new Error('User not found');
        }
        return updatedUser;
    } catch (error) {
        throw error;
    }
};

// Function to delete a user by ID
export const deleteUserById = async (userId) => {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new Error('User not found');
        }
        return deletedUser;
    } catch (error) {
        throw error;
    }
};
