import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/auth.js";
import commentRouter from "./routes/comment.js";
import cookieParser from "cookie-parser";
dotenv.config();

// Variables
const app = express();
const url = process.env.DB_URL;

// Connect DB
dbConnect(url);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/comment", commentRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Hello Farmers");
});

// Listen
app.listen(process.env.PORT || 3000, () => {  
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
