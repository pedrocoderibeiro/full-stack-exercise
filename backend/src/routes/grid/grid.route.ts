import express from "express";
import { getGrid } from "@controllers/grid/grid.controller";
import { validateQueryParams } from "@middleware/validator";
import { gridQueryParamResquest } from "@schemas/grid.schema";

const router = express.Router();

router.get("/", validateQueryParams(gridQueryParamResquest), getGrid);

export default router;
