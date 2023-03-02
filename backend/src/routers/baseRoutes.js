import express from "express";
import { getRoutesInfo } from "../controllers/baseController.js";
const router = express.Router();
router.get("/", getRoutesInfo);
export default router;
