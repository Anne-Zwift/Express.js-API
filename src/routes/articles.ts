import { Router } from "express";
import { pool } from "../database.js";
import { Article} from "../interfaces.js";


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

export default router;