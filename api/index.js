import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();                                  {/*have to initialize dotenv before using it*/}

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB!")
}).catch((err) => {
    console.log("Error!MongoDB not connected")
     console.error("Details:", err.message);
});

const app = express();
app.use(express.json());                          {/*to parse incoming JSON requests*/}

app.listen(3000, () => {                          {/* calling listen function/method */}
    console.log('Server is running on port 3000');
})

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
