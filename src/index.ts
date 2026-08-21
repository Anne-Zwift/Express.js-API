import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Global middlewares
app.use(express.json());
app.use(cors());

// Connect the route modules
app.use("/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});