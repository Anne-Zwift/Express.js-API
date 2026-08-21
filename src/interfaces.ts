export interface User {
  id: number;
  email: string;
  password_hash: string;
  created_at?: Date;
}

export interface UserResponse {
  id: number;
  email: string;
}

export interface CreateArticleInput {
  title: string;
  body: string;
  category: string;
}

export interface Article extends CreateArticleInput {
  id: number;
  submitted_by: number;
  created_at?: Date;
}

