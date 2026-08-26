import { Router } from "express";
import { ResultSetHeader } from "mysql2";
import { pool } from "../database.js";
import { Article } from "../interfaces.js";
import { validateArticleBody } from "../middleware/article-validation.js";
import { authenticateToken } from "../middleware/auth-validation.js";
import { error } from "node:console";



const router = Router();

/**
 * GET /articles
 * Fetches a paginated list of all news articles, ordered by newest first.
 * 
 * @access Public (No authentication required)
 * @param req.query.page - The page number to retrieve (default: 1)
 * @param req.query.limit - Maximum number of articles per page (default: 10)
 */


router.get("/", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const offset = (page - 1) * limit;

    console.log(`API Request - Page: ${page} | Limit: ${limit} | Offset: ${offset}`);

    const [rows] = await pool.execute("SELECT id, title, body, category, submitted_by, created_at FROM articles ORDER BY created_at DESC LIMIT ? OFFSET ?", [String(limit), String(offset)]);

    const articles = rows as Article[];

    res.status(200).json(articles);
  } catch (error) {
    console.error("Database query error:", error);
    res.status(500).json({error: "Failed to fetch content"});
  }
});


/**
 * POST /articles
 * Submits and Creates a new article.
 * 
 * @access Protected (Requires a valid JWT Bearer token)
 * @middleware auth-validation and middleware/article-validation checks if the user is a validated user.
 */

router.post("/", authenticateToken, validateArticleBody, async (req, res) => {
  try {
    const { title, body, category } = req.body;
    const submitted_by = req.user?.id;

    if (!submitted_by) {
      return res.status(401).json({ error: "User context missing"});
    }

    const [result] = await pool.execute<ResultSetHeader>(
      "INSERT INTO articles (title, body, category, submitted_by) VALUES (?, ?, ?, ?)",
      [title, body, category, submitted_by]
    );

    res.status(201).json({
      message: "Article submitted successfully",
      articleId: result.insertId,
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to create content"});
  }
});

export default router;