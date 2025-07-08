# Next.js Health Starter

A modern web application starter built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **ESLint**. Features a beautiful homepage and a comprehensive health check API endpoint.

## 🚀 Features

- ⚡ **Next.js 14** with App Router for optimal performance
- 🔷 **TypeScript** for type safety and better developer experience
- 🎨 **Tailwind CSS** for rapid UI development
- 📏 **ESLint** for code quality and consistency
- 🏥 **Health Check API** with detailed system information
- 📱 **Responsive Design** with beautiful UI components
- 🛠️ **Production Ready** with optimized build configuration

## 🏗️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
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

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🔗 API Endpoints

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

The homepage includes:

- **Hero Section** with gradient text and call-to-action buttons
- **Features Grid** showcasing the technology stack benefits
- **Technology Badges** displaying the tools used
- **Responsive Design** that works on all devices

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
│   │   └── health/
│   │       └── route.ts      # Health check API endpoint
│   ├── globals.css           # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage component
├── next.config.js           # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── .eslintrc.json          # ESLint configuration
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