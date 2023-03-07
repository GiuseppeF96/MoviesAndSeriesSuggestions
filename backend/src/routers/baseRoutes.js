import express from "express";
import { getRoutesInfo } from "../controllers/baseController.js";
// Create a router
const router = express.Router();
// Define routes
router.get("/", getRoutesInfo);
export default router;
