# Full-Stack Project Template

A modern full-stack template using React, TypeScript, Express, and Node.js.

## Features

- 🚀 **Frontend**: React with TypeScript
  - React Router for navigation
  - Modern component structure
  - CSS styling setup
  - Health check integration with backend

- 🛠️ **Backend**: Express.js with TypeScript
  - Modern ES6+ syntax
  - Type safety with TypeScript
  - Basic API setup
  - Error handling middleware
  - CORS and security headers

## Quick Start

1. **Clone this template**
   ```bash
   # Create a new project using this template
   cp -r C:\Users\mnjew\Documents\Cline\templates\fullstack-template my-project
   cd my-project
   ```

2. **Install dependencies**
   ```bash
   # Install all dependencies (frontend and backend)
   npm run install-all
   ```

3. **Start development servers**
   ```bash
   # Start both frontend and backend
   npm start
   ```

## Available Scripts

- `npm start`: Run both frontend and backend
- `npm run client`: Run frontend only
- `npm run server`: Run backend only
- `npm run install-all`: Install all dependencies
- `npm run build`: Build frontend for production

## Project Structure

```
fullstack-template/
├── frontend/             # React frontend
│   ├── src/             # Source files
│   ├── public/          # Static files
│   └── package.json     # Frontend dependencies
├── backend/             # Express backend
│   ├── src/            # Source files
│   ├── dist/           # Compiled files
│   └── package.json    # Backend dependencies
└── package.json        # Root dependencies and scripts
```

## Development

### Frontend (localhost:3000)
- React application with TypeScript
- Uses React Router for navigation
- Styled with modular CSS
- Automatic backend health checking

### Backend (localhost:5000)
- Express.js server with TypeScript
- Basic health check endpoint at `/api/health`
- CORS enabled for frontend integration
- Error handling middleware

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
NODE_ENV=development
```

## TypeScript Configuration

- Frontend and backend are configured with TypeScript
- Strict mode enabled for better type safety
- Path aliases configured for cleaner imports

## Production

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Build the backend:
   ```bash
   cd backend
   npm run build
   ```

3. Deploy the built files:
   - Frontend: `frontend/build/`
   - Backend: `backend/dist/`

## Contributing

This template is maintained as part of the Cline project. For suggestions or issues:
1. Create a fork
2. Make your changes
3. Submit a pull request

## License

MIT License - feel free to use this template for any project!
