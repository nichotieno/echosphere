# EchoSphere: A Real-Time Forum and Chat Application

EchoSphere is a modern, full-stack web application built to demonstrate a real-time forum and private chat system. It's designed with a clean, responsive user interface and a robust backend structure, making it a great starting point for community-based applications.

This project is built with Next.js and styled with Tailwind CSS and ShadCN UI components. It leverages Genkit for potential AI-powered features.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [API and Function Reference](#api-and-function-reference)
  - [Data Fetching Functions](#data-fetching-functions)
  - [Core Components](#core-components)
  - [Pages and Routing](#pages-and-routing)
- [Future Enhancements](#future-enhancements)

## Features

-   **User Authentication:** Mock signup and login flows.
-   **Forum Feed:** A central dashboard where users can view all posts.
-   **Detailed Post View:** Click on a post to see its full content and comments.
-   **Commenting System:** Users can add comments to posts.
-   **Real-Time Private Chat:** A one-on-one chat interface between users.
-   **Responsive Design:** A seamless experience across desktop and mobile devices.

## Tech Stack

-   **Framework:** [Next.js](https://nextjs.org/) (with App Router)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **UI Library:** [React](https://reactjs.org/)
-   **Component Library:** [ShadCN UI](https://ui.shadcn.com/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **AI Integration:** [Genkit](https://firebase.google.com/docs/genkit)
-   **Form Management:** [React Hook Form](https://react-hook-form.com/)
-   **Schema Validation:** [Zod](https://zod.dev/)
-   **Icons:** [Lucide React](https://lucide.dev/guide/packages/lucide-react)
-   **Date/Time:** [date-fns](https://date-fns.org/)

## Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── src/
│   ├── ai/                 # Genkit AI flows and configuration
│   │   ├── genkit.ts       # Genkit initialization
│   │   └── ...
│   ├── app/                # Application routes (App Router)
│   │   ├── (auth)/         # Route group for auth pages
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── dashboard/      # Protected application routes
│   │   │   ├── chat/
│   │   │   ├── posts/[id]/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Landing page
│   ├── components/         # Reusable React components
│   │   ├── ui/             # ShadCN UI components
│   │   ├── chat-layout.tsx
│   │   ├── login-form.tsx
│   │   └── post-card.tsx
│   ├── hooks/              # Custom React hooks
│   │   ├── use-toast.ts
│   │   └── use-mobile.ts
│   └── lib/                # Shared utilities, types, and data
│       ├── data.ts         # Mock data for the application
│       ├── types.ts        # TypeScript type definitions
│       └── utils.ts        # Utility functions (e.g., cn for classnames)
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

## Getting Started

To run this project locally, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## API and Function Reference

This section documents the key functions, components, and data structures used in the application.

### Data Fetching Functions

These functions are located in `src/lib/data.ts` and simulate fetching data from a database.

-   **`getPost(id: string): Post | undefined`**
    -   **Description:** Retrieves a single post object by its unique ID.
    -   **Parameters:** `id` (string) - The ID of the post to fetch.
    -   **Returns:** A `Post` object or `undefined` if not found.

-   **`getCommentsForPost(id: string): Comment[]`**
    -   **Description:** Retrieves all comments associated with a specific post ID.
    -   **Parameters:** `id` (string) - The ID of the post.
    -   **Returns:** An array of `Comment` objects. Returns an empty array if there are no comments.

-   **`getUser(id: string): User | undefined`**
    -   **Description:** Retrieves a user object by their unique ID.
    -   **Parameters:** `id` (string) - The ID of the user.
    -   **Returns:** A `User` object or `undefined` if not found.

### Core Components

Key reusable components located in `src/components/`.

-   **`ChatLayout (src/components/chat-layout.tsx)`**
    -   **Description:** A comprehensive UI component that renders the entire chat interface, including the user list, message display area, and input form.
    -   **Props:**
        -   `users: User[]`: An array of all users to display in the chat list.
        -   `messages: ChatMessage[]`: An array of all chat messages.
        -   `defaultUserId: string`: The ID of the currently logged-in user.

-   **`LoginForm (src/components/login-form.tsx)`**
    -   **Description:** A form for user authentication. It validates input using Zod and manages form state with React Hook Form. On successful (mock) submission, it redirects to the `/dashboard`.

-   **`SignupForm (src/components/signup-form.tsx)`**
    -   **Description:** A form for new user registration. It includes fields for personal details and credentials, with validation provided by Zod.

-   **`PostCard (src/components/post-card.tsx)`**
    -   **Description:** Displays a preview of a forum post on the main feed. It shows the title, author, creation time, a content snippet, category, and comment count.
    -   **Props:**
        -   `post: Post`: The post object to render.

### Pages and Routing

The application uses the Next.js App Router for file-based routing.

-   **/ (page.tsx):** The public-facing landing page.
-   **/login (login/page.tsx):** Page for user login.
-   **/signup (signup/page.tsx):** Page for new user registration.
-   **/dashboard (dashboard/page.tsx):** The main forum feed, showing a list of `PostCard` components. This is the default page after logging in.
-   **/dashboard/chat (dashboard/chat/page.tsx):** The private messaging page, which uses the `ChatLayout` component.
-   **/dashboard/posts/[id] (dashboard/posts/[id]/page.tsx):** A dynamic route that displays the full details of a single post, including its content and all associated comments.

## Future Enhancements

-   **Real Database Integration:** Replace the mock data in `src/lib/data.ts` with a real database like Firestore or a SQL database via an ORM like Prisma.
-   **Live Authentication:** Implement a real authentication service (e.g., Firebase Authentication, NextAuth.js).
-   **Real-Time Updates:** Use WebSockets or a service like Firebase Realtime Database to push live updates for chat messages and forum posts.
-   **AI-Powered Features:**
    -   **Content Moderation:** Use a Genkit flow to analyze and flag inappropriate content in posts and comments.
    -   **Summarization:** Create an AI flow to summarize long posts or comment threads.
    -   **Smart Replies:** Generate AI-suggested replies in the chat interface.
-   **User Profiles:** Create dedicated profile pages for users to showcase their posts and activity.
-   **Notifications:** Implement a notification system for new messages and replies.
