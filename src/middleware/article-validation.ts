import type { Request, Response, NextFunction } from "express";
import { z } from "zod";
import type { CreateArticleInput } from "../interfaces.js";

/**
 * Zod Schema - expected values:
 * title: string; body: string; category: string;
 * z.object({}) - with property for each value expected and wanted to validate.
 * 
 */
export const articleSchema = z.object({
  title: z
  .string()
  .trim()
  .min(3, "Title must be at least 3 characters")
  .max(100, "Title must not exceed 100 characters"),
  body: z
  .string()
  .trim()
  .min(10, "Article body must be at least 10 characters long"),
  category: z
  .string()
  .trim()
  .min(2, "Category must be at least 2 characters long")
  .max(50, "Category cannot exceed 50 characters"),
});

export const validateArticleBody = (req: Request, res: Response, next: NextFunction) => {
  const result = articleSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.issues.map((issue) => issue.message),
    });
  }

  req.body = result.data as CreateArticleInput;
  next();
};