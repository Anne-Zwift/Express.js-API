import type { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { verifyToken } from '../utils/jwt.js';

// Zod Schema (Registering og login) id, email, password_hash, created_at
export const authSchema = z.object({
  email: z.email({ message: 'Invalid email format' }),

  password: z.string().min(8, 'Password must be at least 8 characters'),
});

// Middleware function, safeParse(req.body)
export const validateAuthBody = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result = authSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: 'Validation failed',
      details: result.error.issues.map((issue) => issue.message),
    });
  }

  req.body = result.data;
  next();
};

// This middleware will check for valid JWT tokens and extract the user ID for authorization decisions.
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      error: 'Access token required',
    });
  }

  if (!authHeader.startsWith('Bearer ')) {
    return res.status(401).json({
      error: 'Token must be in format: Bearer <token>',
    });
  }

  const token = authHeader.substring(7);

  const payload = verifyToken(token);

  if (!payload) {
    return res.status(403).json({
      error: 'Invalid or expired token',
    });
  }

  req.user = { id: payload.userId };
  next();
};
