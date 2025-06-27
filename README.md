<div align="center">
  <h1>AI-Powered Notes 📝</h1>

<p>An intelligent note-taking application powered by AI. Built with Next.js 15 and Convex, featuring AI-powered chatbot and RAG (Retrieval-Augmented Generation) technology to make your notes smarter.</p>

</div>

![Notes Landing](/public/readme-images/notes.png)

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Convex](https://img.shields.io/badge/Convex-FF6B6B?style=for-the-badge&logo=convex&logoColor=white)](https://convex.dev/)
[![AI SDK](https://img.shields.io/badge/AI%20SDK-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/vercel/ai)
[![OpenAI](https://img.shields.io/badge/OpenAI-000000?style=for-the-badge&logo=openai&logoColor=white)](https://openai.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn/ui](https://img.shields.io/badge/Shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)
[![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=white)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-FF6B6B?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

</div>

## ✨ Features

<div align="center">

| Feature                | Description                                                        |
| ---------------------- | ------------------------------------------------------------------ |
| 🔐 User Authentication | Secure authentication system powered by Convex Auth.               |
| 📝 Smart Note Creation | AI-assisted note creation and editing capabilities.                |
| 🤖 AI Chatbot          | Intelligent chatbot to interact with your notes and ask questions. |
| 🔍 RAG Technology      | Enhanced AI responses with Retrieval-Augmented Generation.         |
| 📋 Note Management     | Organize and manage your notes efficiently.                        |
| 🎨 Modern UI           | Modern and responsive design with Shadcn/ui components.            |
| 🌙 Dark Mode           | Dark/light mode support for better user experience.                |
| ⚡️ Real-time Updates  | Real-time data synchronization powered by Convex.                  |
| 📱 Responsive Design   | Perfect user experience across all devices.                        |
| 🔧 Type Safety         | End-to-end TypeScript support for better development.              |
| 📊 Advanced Search     | AI-powered advanced search capabilities.                           |
| 🎯 Markdown Support    | Write and view notes in Markdown format.                           |

</div>

## 🌟 Tech Highlights

- **Next.js 15** with modern React 19 support and Turbopack
- **Convex** for serverless backend and real-time database
- **TypeScript** for complete type safety
- **AI SDK** with OpenAI integration and streaming responses
- **RAG Technology** for enhanced AI responses
- **Convex Auth** for secure authentication
- **Shadcn/ui** components for modern UI
- **Tailwind CSS** for responsive design
- **React Hook Form** for managing forms with ease
- **Zod** for generating typesafe forms with minimal boilerplate

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/ai-notes.git

cd ai-notes

# Install dependencies
npm install

# Create environment variables file
cp .env.example .env.local

# Set up Convex
npx convex dev

# Start the development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to use the application.

## 🛠️ Tech Stack

<details>
  <summary>Click to expand tech stack details</summary>

### Core Framework & Libraries

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://reactjs.org/)** - Latest React with concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[React Hook Form](https://react-hook-form.com/)** - Performant form handling
- **[React Markdown](https://github.com/remarkjs/react-markdown)** - Markdown rendering

### AI & Backend

- **[Convex](https://convex.dev/)** - Serverless backend with real-time database
- **[Convex Auth](https://docs.convex.dev/auth)** - Authentication solution
- **[AI SDK](https://sdk.vercel.ai/)** - AI integration toolkit
- **[OpenAI](https://openai.com/)** - GPT models for AI features
- **RAG Technology** - Retrieval-Augmented Generation for enhanced AI responses

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable components with Radix UI
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[Next Themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Tailwind Typography](https://tailwindcss.com/docs/typography-plugin)** - Beautiful typography

</details>

## 📸 Screenshots

<div align="center">

### 📋 Notes Dashboard

![Notes](/public/readme-images/notes.png)

### ✍️ Note Creation

![Note Create](/public/readme-images/note-create.png)

### 👁️ Note Viewer

![Note View](/public/readme-images/note-view.png)

### 🤖 AI Chatbot

![Chatbot](/public/readme-images/chatbot.png)

</div>

## 🔐 Environment Variables

Create a `.env.local` file in the root of your project:

```env
# Convex
CONVEX_DEPLOY_KEY=
NEXT_PUBLIC_CONVEX_URL=

# Authentication (Convex Auth)
JWKS=
JWT_PRIVATE_KEY=

# OpenAI
OPENAI_API_KEY=


# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

| Variable                 | Description                         | Required |
| ------------------------ | ----------------------------------- | -------- |
| `CONVEX_DEPLOY_KEY`      | Convex deployment identifier        | ✅       |
| `NEXT_PUBLIC_CONVEX_URL` | Public Convex URL                   | ✅       |
| `JWKS`                   | JSON Web Key Set for authentication | ✅       |
| `JWT_PRIVATE_KEY`        | Private key for JWT token signing   | ✅       |
| `OPENAI_API_KEY`         | OpenAI API key for AI features      | ✅       |
| `NEXT_PUBLIC_BASE_URL`   | Public URL of your application      | ✅       |

## 🎯 Key Features Explained

### 🤖 AI-Powered Chatbot

- Interact with your notes intelligently
- Enhanced responses with RAG technology
- Fast interaction with streaming responses

### 📝 Smart Note Management

- Rich text editor with Markdown support
- Real-time collaboration features
- Auto-save functionality

### 🔍 Advanced Search

- AI-powered search algorithms
- Semantic search capabilities
- Quick filtering and sorting
