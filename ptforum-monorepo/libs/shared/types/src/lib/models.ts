export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  roles: string[];
  isActive: boolean;
}

export interface Post {
  id: string;
  authorId: string;
  title: string;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt?: string;
}

export interface Comment {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: string;
}
