import  jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

/*JWT middleware: Implement token-based authentication middleware for route protection. 
Creating JWT Utility Functions
Create two helper functions:
- generateToken: Creates JWT tokens when users log in.
- verifyToken: Checks if tokens are valid for authenticated requests.*/

const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-for-development";

export const generateToken = (userId: number): string => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
}

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number };
  } catch (error) {
    return null;
  }
};