import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const loginUser = async (userDetails) => {

    const user = await User.findOne({ email: userDetails.email });
    
    if (!user) {
      throw new Error('User not found');
    }
  
    const passwordMatch = await bcrypt.compare(
      userDetails.password,
      user.password
    );
  
    if (!passwordMatch) {
      throw new Error('Password not matched');
    }
  
    const token = jwt.sign(
      { _id: user._id, email: user.email, name: user.username },
      process.env.SECRET_KEY 
    );


  
    return {token:token,role:user.role}; 
  };

  export const createUser = async (userData) => {
    try {
        const existingUser = await User.findOne({ email: userData.email });
        
        if (existingUser) {
            console.log("User already exists");
            return existingUser; 
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10); 
        const newUser = await User.create({
            ...userData,
            password: hashedPassword
        });
        
        console.log(newUser);
        return newUser;
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
