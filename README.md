# Supabase Auth Learning (React + Vite)

This project is a learning sandbox for implementing Supabase authentication in a React app. It starts with a small Vite setup and basic auth-oriented screens (Sign In, Sign Up, Dashboard) plus an `AuthContext` scaffold.

## What I am practicing

- wiring Supabase auth with React state and context
- basic auth flows: sign up, sign in, and session handling
- route-level access patterns (public vs protected)

## Tech stack

- React
- Vite
- React Router
- Supabase (auth)

## Getting started

1. Install dependencies:
	```bash
	npm install
	```
2. Start the dev server:
	```bash
	npm run dev
	```

## Environment variables (when Supabase is wired)

Create a `.env` file in the project root and add the following once you connect Supabase:

```bash
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## Scripts

- `npm run dev` - start the dev server
- `npm run build` - build for production
- `npm run preview` - preview the production build
