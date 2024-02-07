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
  var token = jwt.sign(
    { _id: user._id, email: user.email , name: user.firstName },
    process.env.SECRET_KEY
  );

  return token;
};

//create new user
export const userRegistration = async (body) => {
  const email = await User.findOne({ email: body.email });
  if (email) {
    throw new Error('user alrady have an account');
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;
  const data = await User.create(body);
  return data;
};

export const adminRegistration = async (body) => {
  const email = await User.findOne({ email: body.email });
  if (email) {
    throw new Error('user alrady have an account');
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  body.password = hashedPassword;
  const data = await User.create(body);
  return data;
};

export const userDetails = async (body) =>{
  try{const data = await User.findOne({_id:body.user_id});

  if(!data){
    throw new Error('user not found')
  }

  return data}
  catch(error){
    throw new Error(error)
  }

}
