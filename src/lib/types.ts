export type User = {
  id: string;
  nickname: string;
  firstName: string;
  lastName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other' | 'Prefer not to say';
  email: string;
  avatarUrl: string;
  online: boolean;
};

export type Category = 'Technology' | 'Lifestyle' | 'Science' | 'Sports' | 'Gaming' | 'General';

export type Post = {
  id: string;
  title: string;
  content: string;
  author: User;
  category: Category;
  createdAt: string;
  commentsCount: number;
};

export type Comment = {
  id: string;
  content: string;
  author: User;
  createdAt: string;
};

export type ChatMessage = {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
};

export type Conversation = {
    id: string;
    user: User;
    lastMessage: ChatMessage;
};
