import express from "express";
import { create, findAll } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", findAll);
router.post("/", create);

export default router;
