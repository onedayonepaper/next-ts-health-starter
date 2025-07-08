# Next.js Health Starter

A modern, full-stack web application built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and comprehensive authentication and task management features.

## 🚀 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🔷 **TypeScript** for type safety and better developer experience
- 🎨 **Tailwind CSS** for rapid UI development
- � **JWT Authentication** with secure password hashing
- 📝 **Task Management** with full CRUD operations
- 🛡️ **Middleware Protection** for secure routes
- 📊 **Dashboard** with real-time statistics
- 🎯 **Form Validation** with Zod and React Hook Form
- 📱 **Responsive Design** with beautiful UI components
- 🔔 **Toast Notifications** for user feedback
- 🏥 **Health Check API** with detailed system information
- � **JSON File Database** for simple data persistence
- 🛠️ **Production Ready** with optimized build configuration

## 🏗️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: JWT with bcryptjs
- **Validation**: Zod
- **Forms**: React Hook Form
- **UI Components**: Lucide React icons
- **Notifications**: React Hot Toast
- **Database**: JSON file-based storage
- **Linting**: ESLint
- **Package Manager**: npm

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/onedayonepaper/next-ts-health-starter.git
cd next-ts-health-starter
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables (optional):
```bash
cp .env.example .env.local
```

Add the following variables to `.env.local`:
```
JWT_SECRET=your-super-secret-jwt-key-here
NODE_ENV=development
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 Getting Started

1. **Homepage**: Visit the homepage to see the application overview
2. **Register**: Create a new account at `/register`
3. **Login**: Sign in to your account at `/login`
4. **Dashboard**: Access your personal dashboard at `/dashboard`
5. **Create Tasks**: Add new tasks using the dashboard interface
6. **Manage Tasks**: Mark tasks as complete or delete them as needed

## 🔐 Authentication Flow

1. **Registration**: Users can create accounts with email and password
2. **Login**: Authentication returns a JWT token stored in localStorage
3. **Protected Routes**: Middleware automatically protects dashboard and API routes
4. **Token Validation**: All API requests require valid Bearer tokens
5. **Session Management**: Tokens expire after 24 hours for security

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🔗 API Endpoints

### Authentication

**POST** `/api/auth/register`
- Register a new user account
- Body: `{ name, email, password, confirmPassword }`
- Returns: JWT token and user information

**POST** `/api/auth/login`
- Login with existing credentials
- Body: `{ email, password }`
- Returns: JWT token and user information

### Task Management

**GET** `/api/tasks`
- Get all tasks for authenticated user
- Requires: Bearer token in Authorization header
- Returns: Array of user's tasks

**POST** `/api/tasks`
- Create a new task
- Requires: Bearer token in Authorization header
- Body: `{ title, description?, completed? }`
- Returns: Created task object

**GET** `/api/tasks/[id]`
- Get specific task by ID
- Requires: Bearer token in Authorization header
- Returns: Task object

**PUT** `/api/tasks/[id]`
- Update specific task
- Requires: Bearer token in Authorization header
- Body: `{ title?, description?, completed? }`
- Returns: Updated task object

**DELETE** `/api/tasks/[id]`
- Delete specific task
- Requires: Bearer token in Authorization header
- Returns: Success message

### Health Check

**GET** `/api/health`

Returns comprehensive health information about the application:

```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456,
  "environment": "development",
  "version": "0.1.0",
  "memory": {
    "used": 80.78,
    "total": 116.66
  },
  "service": "next-ts-health-starter"
}
```

## 🎨 UI Components

The application includes:

### Homepage
- **Hero Section** with gradient text and call-to-action buttons
- **Features Grid** showcasing authentication and task management
- **Technology Badges** displaying the full tech stack
- **Responsive Design** that works on all devices

### Authentication Pages
- **Login Form** with email/password validation
- **Register Form** with password confirmation
- **Form Validation** with real-time error messages
- **Loading States** during API calls

### Dashboard
- **Statistics Cards** showing task completion metrics
- **Task List** with interactive completion toggles
- **Create Task Form** with inline editing
- **User Profile** section with logout functionality
- **Responsive Layout** optimized for mobile and desktop

## 🔧 Configuration

### ESLint

The project uses Next.js recommended ESLint configuration with additional rules for code quality.

### Tailwind CSS

Tailwind CSS is configured with default settings and includes:
- Custom color schemes
- Responsive breakpoints
- Modern utility classes

### TypeScript

TypeScript is configured with strict mode for maximum type safety.

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login/
│   │   │   │   └── route.ts     # Login API endpoint
│   │   │   └── register/
│   │   │       └── route.ts     # Register API endpoint
│   │   ├── health/
│   │   │   └── route.ts         # Health check API endpoint
│   │   └── tasks/
│   │       ├── [id]/
│   │       │   └── route.ts     # Individual task operations
│   │       └── route.ts         # Task list operations
│   ├── dashboard/
│   │   └── page.tsx             # Dashboard page
│   ├── login/
│   │   └── page.tsx             # Login page
│   ├── register/
│   │   └── page.tsx             # Register page
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout with toast provider
│   └── page.tsx                 # Homepage component
├── lib/
│   ├── auth.ts                  # Authentication utilities
│   ├── database.ts              # JSON file database operations
│   ├── utils.ts                 # Common utility functions
│   └── validations.ts           # Zod validation schemas
├── middleware.ts                # Next.js middleware for route protection
├── next.config.js               # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── .eslintrc.json               # ESLint configuration
```

## 🚀 Deployment

The application is ready for deployment on platforms like:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker** containers

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Type-safe with [TypeScript](https://www.typescriptlang.org/)
- Code quality with [ESLint](https://eslint.org/)