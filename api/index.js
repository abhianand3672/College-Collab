import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();                                  {/*have to initialize dotenv before using it*/}

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB!")
}).catch((err) => {
    console.log("Error")
});

const app = express();

app.listen(3000, () => {                          {/* calling listen function/method */}
    console.log('Server is running on port 3000');
})
