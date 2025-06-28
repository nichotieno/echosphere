import { User, Post, Comment, ChatMessage, Category } from './types';
import { subDays, subHours, subMinutes } from 'date-fns';

const now = new Date();

export const users: User[] = [
  { id: '1', nickname: 'TechGuru', firstName: 'Alex', lastName: 'Johnson', age: 28, gender: 'Male', email: 'alex@example.com', avatarUrl: 'https://placehold.co/100x100.png', online: true },
  { id: '2', nickname: 'ArtLover', firstName: 'Brianna', lastName: 'Smith', age: 34, gender: 'Female', email: 'brianna@example.com', avatarUrl: 'https://placehold.co/100x100.png', online: false },
  { id: '3', nickname: 'CodeWizard', firstName: 'Charlie', lastName: 'Davis', age: 22, gender: 'Other', email: 'charlie@example.com', avatarUrl: 'https://placehold.co/100x100.png', online: true },
  { id: '4', nickname: 'SpaceExplorer', firstName: 'Diana', lastName: 'Miller', age: 45, gender: 'Female', email: 'diana@example.com', avatarUrl: 'https://placehold.co/100x100.png', online: true },
  { id: '5', nickname: 'GamerX', firstName: 'Ethan', lastName: 'Wilson', age: 19, gender: 'Male', email: 'ethan@example.com', avatarUrl: 'https://placehold.co/100x100.png', online: false },
];

export const posts: Post[] = [
  { id: 'p1', title: 'The Future of AI', content: 'Artificial Intelligence is evolving at an unprecedented rate. From large language models to self-driving cars, the possibilities seem endless. What are your thoughts on the future of AI and its impact on society?', author: users[0], category: 'Technology', createdAt: subHours(now, 2).toISOString(), commentsCount: 2 },
  { id: 'p2', title: 'Minimalist Living: A Guide', content: 'Living with less can bring more joy and freedom. This post explores the principles of minimalism and how you can apply them to your own life. It\'s not just about decluttering your home, but also your mind.', author: users[1], category: 'Lifestyle', createdAt: subHours(now, 18).toISOString(), commentsCount: 1 },
  { id: 'p3', title: 'The Mysteries of Quantum Physics', content: 'Quantum physics is a cornerstone of modern science, yet it remains one of the most mysterious. Let\'s discuss concepts like superposition and entanglement.', author: users[3], category: 'Science', createdAt: subDays(now, 2).toISOString(), commentsCount: 0 },
  { id: 'p4', title: 'Top 5 Indie Games of the Year', content: 'This year has been fantastic for indie games. Here are my top 5 picks that you should definitely check out. Share your favorites in the comments!', author: users[4], category: 'Gaming', createdAt: subDays(now, 3).toISOString(), commentsCount: 1 },
];

export const comments: Record<string, Comment[]> = {
  'p1': [
    { id: 'c1-1', content: 'I think AI will automate many jobs, which is both exciting and a bit scary.', author: users[2], createdAt: subHours(now, 1).toISOString() },
    { id: 'c1-2', content: 'The ethical implications are huge. We need to be careful with how we develop and deploy AI systems.', author: users[3], createdAt: subMinutes(now, 30).toISOString() },
  ],
  'p2': [
    { id: 'c2-1', content: 'I started my minimalist journey a year ago and it has been life-changing!', author: users[0], createdAt: subHours(now, 5).toISOString() },
  ],
  'p4': [
     { id: 'c4-1', content: 'Great list! I would also add "Hollow Knight" to that, even though it\'s older.', author: users[2], createdAt: subDays(now, 1).toISOString() },
  ]
};

export const messages: ChatMessage[] = [
    { id: 'm1', senderId: '1', receiverId: '3', content: 'Hey Charlie, saw your comment on the AI post. Good points!', timestamp: subMinutes(now, 45).toISOString(), read: true },
    { id: 'm2', senderId: '3', receiverId: '1', content: 'Thanks Alex! Yeah, it\'s a fascinating topic.', timestamp: subMinutes(now, 43).toISOString(), read: true },
    { id: 'm3', senderId: '1', receiverId: '3', content: 'Definitely. Are you working on any AI projects yourself?', timestamp: subMinutes(now, 40).toISOString(), read: true },
    { id: 'm4', senderId: '3', receiverId: '1', content: 'Just some small personal stuff with TensorFlow. You?', timestamp: subMinutes(now, 39).toISOString(), read: false },
    { id: 'm5', senderId: '2', receiverId: '4', content: 'Hi Diana! Loved your post on quantum physics.', timestamp: subHours(now, 3).toISOString(), read: true },
    { id: 'm6', senderId: '4', receiverId: '2', content: 'Thank you, Brianna! Glad you enjoyed it.', timestamp: subHours(now, 2).toISOString(), read: true },
];

export const getPost = (id: string) => posts.find(p => p.id === id);
export const getCommentsForPost = (id: string) => comments[id] || [];
export const getUser = (id: string) => users.find(u => u.id === id);
