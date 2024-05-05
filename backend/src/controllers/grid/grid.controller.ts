import { Request, Response } from "express";
import { GridService } from "@services/grid/grid.service";

const gridService = new GridService();

export const getGrid = (req: Request, res: Response): void => {
  try {
    const grid = gridService.generateGrid();
    res.status(200).json(grid);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
