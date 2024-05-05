import express from "express";
import { getGrid } from "@controllers/grid/grid.controller";

const router = express.Router();

router.get("/", getGrid);

export default router;
