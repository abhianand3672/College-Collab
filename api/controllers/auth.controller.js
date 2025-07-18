import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';                              {/*For password hashing*/}
import { errorHandler } from "../utils/error.js";

export const signup = async(req, res, next)=>{                {/*async for making it asynchronous*/}

    const {username, email, password} = req.body;
    const hashedPassword = bcryptjs.hashSync(password,10);

    const newUser = new User({username, email, password:hashedPassword});   {/*using hashed password*/}
    
    try {                               {/*to show error to user, without try catch will only visible to terminal*/}
       
    await newUser.save();     {/*for saving USER TO DATABASE, used await here, so arrow function is async*/}
        res.status(201).json('User created successfully!');
    } 
    catch (error) {
        next(error);
        // next(errorHandler(550, 'error from function'));    {/*manual error*/}
    }
    

};  
  
   
