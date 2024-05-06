import { Request, Response } from "express";
import { GridService } from "@services/grid/grid.service";
import { GridQueryParams } from "@schemas/grid.schema";

const gridService = new GridService();

export const getGrid = (req: Request, res: Response): void => {
  try {
    const queryParams = req.query as unknown as GridQueryParams;
    const { letter } = queryParams;
    const grid = gridService.generateGrid(letter);
    res.status(200).json(grid);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
