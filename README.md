# EmployWise

## Deployment

The application is deployed at:
[EmployWise](https://mydomain.vercel.app)

### Frontend Framework

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe JavaScript development

### State Management

- **Redux Toolkit** - For efficient state management
  - `@reduxjs/toolkit` - Official Redux toolkit for efficient Redux development
  - `react-redux` - React bindings for Redux

### Routing

- **React Router** - For client-side routing
  - `react-router` - Core routing library

### Styling

- **Tailwind CSS** - Utility-first CSS framework
  - `tailwindcss` - Core Tailwind CSS framework
  - `@tailwindcss/forms` - Form styling plugin
  - `autoprefixer` - PostCSS plugin for vendor prefixes
  - `postcss` - CSS transformation tool

### Development Tools

- **Vite** - Next Generation Frontend Tooling
- **TypeScript** - For type safety and better developer experience
- **ESLint** - For code linting
- **Prettier** - For code formatting

## Project Structure

```
employwise/
├── app/
│   ├── components/
│   │   ├── ProtectedRoute.tsx
│   │   └── users/
│   │       ├── EditUserModal.tsx
│   │       ├── DeleteConfirmationModal.tsx
│   │       ├── UserCard.tsx
│   │       └── UserCardSkeleton.tsx
│   ├── routes/
│   │   ├── auth/
│   │   │   └── login.tsx
│   │   └── users/
│   │       └── index.tsx
│   └── store/
│       ├── slices/
│       │   ├── authSlice.ts
│       │   └── usersSlice.ts
│       └── store.ts
├── public/
├── src/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## API Integration

The application integrates with the following API endpoints:

- `POST /api/login` - User authentication
- `GET /api/users` - Fetch users list
- `PUT /api/users/:id` - Update user details
- `DELETE /api/users/:id` - Delete user
