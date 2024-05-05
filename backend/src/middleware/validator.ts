import { NextFunction, Request, Response } from "express";
import { ParsedQs } from "qs";
import { ZodError, z } from "zod";

const validateQueryParams = (schema: z.ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const queryParams: ParsedQs = req.query;

      schema.parse(queryParams);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res
          .status(400)
          .json({ error: "Validation error", details: error.errors });
      } else {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
};

export { validateQueryParams };
