import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Farmers");
});
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port 3000");
});
