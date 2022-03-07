import express from "express";
import nodemailer from "nodemailer";
import mailController from "../controllers/mailController.js";

const router = express.Router();

router.post("/sendMail", mailController.sendMail);

export default router;