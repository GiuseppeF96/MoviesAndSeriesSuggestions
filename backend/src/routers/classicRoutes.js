import express from "express";
import {
  getClassic,
  findClassicByName,
  findClassicById,
  addClassic,
  newClassicValidators,
  patchClassic,
  deleteClassic,
  getRandomClassic,
} from "../controllers/classicController.js";

const router = express.Router();

router.get("/", getClassic);
router.get("/search", findClassicByName);
router.get("/id/:id", findClassicById);
router.post("/", newClassicValidators, addClassic);
router.patch("/id/:id", patchClassic);
router.delete("/id/:id", deleteClassic);
router.get("/randomizer", getRandomClassic);

export default router;
