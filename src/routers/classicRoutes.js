import express from "express";
import {
  getClassic,
  findClassic,
  findClassicById,
  addClassic,
  newClassicValidators,
} from "../controllers/classicController.js";

const router = express.Router();

router.get("/", getClassic);
router.get("/search", findClassic);
router.get("/:id", findClassicById);
router.post("/", newClassicValidators, addClassic);

export default router;
