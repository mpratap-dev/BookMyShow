import dotenv from "dotenv";
import express from "express";
import connectDB from "./database/connect.js";
import setupRoutes from "./routes/index.js";

const app = express();
app.use(express.json());
dotenv.config();
connectDB();
setupRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
