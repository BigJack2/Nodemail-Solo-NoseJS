import express from "express";
import cors from "cors";
//import db from "./db/db.js";
import dotenv from "dotenv";
//import roleRoutes from "./routes/roleRoutes.js";
//import userRoutes from "./routes/userRoutes.js";
import sendMail from "./routes/mailRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

//app.use("/api/role", roleRoutes);
//app.use("/api/user", userRoutes);
app.use("/api", sendMail);

app.listen(process.env.PORT, () => console.log("Backend Server running on Port:", process.env.PORT));

//db.dbConnection();