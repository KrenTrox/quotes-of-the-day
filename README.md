# Quotes of the Day

A modern, production-ready React application that displays inspiring quotes fetched from the FavQs API built with TypeScript, React Query, and Tailwind CSS.

Project diagram - https://gitdiagram.com/KrenTrox/quotes-of-the-day

## Features

- 🎯 Fetch random quotes with customizable count
- 🏷️ Filter quotes by tags with interactive tag-clicking
- 🎨 Beautiful, responsive design with smooth transitions
- ⚡ Optimized performance with React Query caching
- 🛡️ Comprehensive error handling and error boundaries
- 🔄 Rate limiting and request retries
- 📱 Mobile-first responsive design
- 🎭 Loading states and smooth transitions

## Architecture

The application follows SOLID principles and modern React best practices:

- 📦 Component-driven architecture
- 🎣 Custom hooks for business logic
- 🔄 Context API for state management
- 🎯 Single Responsibility Principle
- 🔌 Interface Segregation
- 🏗️ Liskov Substitution Principle

### Project Structure

```
src/
├── components/
│   ├── form/           # Form-related components
│   ├── layout/         # Layout components
│   ├── quotes/         # Quote-related components
│   ├── Error.tsx       # Error message component
│   └── ErrorBoundary.tsx
├── context/           # React Context providers
├── hooks/            # Custom React hooks
├── lib/             # API and utility functions
└── types/           # TypeScript type definitions
```

## Tech Stack

- **Frontend:**

  - React 18 with TypeScript
  - TanStack Query (React Query) for data fetching
  - Tailwind CSS for styling
  - Lucide React for icons
  - Vite for build tooling

- **Backend:**
  - Node.js with Express
  - TypeScript
  - Zod for validation
  - Axios for HTTP requests
  - Express Rate Limit

## Prerequisites

- Node.js (v18 or higher)
- FavQs API key (get one from https://favqs.com/api)

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with:
   ```
   FAVQS_API_KEY=your_api_key_here
   PORT=4646
   ```

## Development

1. Start the backend server:

   ```bash
   npm run server
   ```

2. Start the frontend development server:
   ```bash
   npm run dev
   ```

## Production Build

```bash
npm run build
```

## API Endpoints

### GET /api/quotes

Fetches random quotes from FavQs API.

Query Parameters:

- `count` (required): Number of quotes to fetch (1-50)
- `tag` (optional): Filter quotes by tag

## Error Handling

The application implements a robust error handling strategy:

- 🛡️ React Error Boundaries for component-level errors
- 🚦 API error handling with retry logic
- 📝 User-friendly error messages
- 🔄 Automatic request retries with exponential backoff

## Performance Optimizations

- ⚡ React Query for efficient data caching
- 🎯 Debounced API requests
- 🔄 Optimistic UI updates
- 📦 Code splitting and lazy loading
- 🎨 Tailwind CSS for optimized styling

## Best Practices

- ✅ TypeScript for type safety
- 🧪 Zod for runtime validation
- 🎯 SOLID principles
- 🔄 Proper component composition
- 🎨 Consistent code style with ESLint
- 📱 Responsive design patterns

## License

MIT
