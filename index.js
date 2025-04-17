import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./Kambaz/Users/routes.js";

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

mongoose
  .connect("mongodb://127.0.0.1:27017/kambaz", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

userRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});