# RhodiumDevTest

A repository which holds code for full-stack developer application assignment for Rhodium Tech

Made using React, Typescript, Nodejs, Expressjs, Mongodb, MaterialUI, Zustand, Multer, Vercel

## Server:

Firstly, if running locally, make sure you have a ".env.local" file in the root of your server. it will have the following variables:

```
MONGO_URI=
PORT=
STATUS=
SECRET_KEY=
```

### Folder structure and architecture:

In this project, the source code is organized to follow a modular and maintainable architecture. The folder structure supports separation of concerns, making the application easier to scale and maintain. Each folder has a specific responsibility, which ensures that code is organized logically and is easy to navigate.

```
src/
│
├── controllers/              # Handles Express requests and responses for different routes
│   ├── authController.ts      # Auth controller for user authentication-related routes
│   └── vehicleController.ts   # Vehicle controller for managing vehicle-related routes
│
├── middlewares/              # Contains middleware functions for request handling
│   └── auth.ts               # Middleware to authenticate JWT tokens and validate logged-in users
│
├── models/                   # Contains MongoDB schemas for the application data
│   ├── userModel.ts           # Schema for User collection
│   └── vehicleModel.ts        # Schema for Vehicle collection
│
├── routes/                   # Express route definitions for different resources
│   ├── authRoutes.ts          # Auth routes for login and token verification
│   └── vehicleRoutes.ts       # Vehicle routes for CR operations on vehicles
│
├── services/                 # Contains logic for interacting with the database
│   ├── authService.ts         # Service for handling user authentication logic
│   ├── vehicleService.ts      # Service for handling vehicle-related
logic (CR operations)
│   └── ImageService.ts       # Service for handling Images
│
├── utils/                    # Contains utility files and helper functions
│   ├── constants.ts           # Stores constants such as paths, etc.
│   ├── dbConnection.ts       # Establishes DB connection and configuration
│   ├── loadEnvVars.ts        # Loads environment variables from .env.local file
│   ├── populateUsers.ts      # Populates initial users into the database
│   └── types.ts              # TypeScript types for the application
│
│
└── index.ts                  # Main application entry point, initializing Express server
```

### Populating users:

as asked in the assignment, only 1 user is populated manually. there is no registration process. to do that, run the command:

```
npm run populate-users
```

and a user will be created in the connected mongodb cluster, with the email: "Faraz@RhodiumTech.com"

### Running server:

Since this is written using typescript, you first have to compile it in javascript and then run the index file, executing the commands:

```
npx tsc && node dist/index.js
```

but these are automatically written and running command is simplified into:

```
npm start
```

### Testing Login:

after running server, run this command in terminal to test the login route.

```
curl -X POST http://localhost:4000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "Faraz@RhodiumTech.com",
    "password": "123456abc"
  }'
```

it will return a message similar to:

```
{"message":"Login successful","user":{"_id":"<recordID>","email":"Faraz@RhodiumTech.com","password":"$2b$10$CL3atF8lfo78FWeonaMI0umhCjBXluT5boSkaENW1l.WqAnBVSNta","createdAt":"2025-01-11T01:57:04.026Z","updatedAt":"2025-01-11T01:57:04.026Z","__v":0},"token":<personal token>}
```

### Handling Images:

So initially i had a local folder when running locally, but for vercel, since it is serverless and only allows write permission to "tmp" folder, i write the images to "/tmp/UserUploads" and mark that static to access them live.

But the concern is this will not persist as maximum timeout of serverless lambda functions on AWS (which im assuming vercel uses) is 15 minutes. Another way of handling this wouldve been to host the images in a S3 storage bucket (directly on AWS)

### Deploying to vercel:

Comment out these 2 lines in index.js since vercel already has environment variables:

```
import { loadEnvVars } from "./utils/loadEnvVars";
loadEnvVars(envPath);
```

then run the following command :

```
npm run build
```

this will compile the dist folder, which has index.js, entry point needed by vercel, clarified in vercel.json and deploy application and server will be deployed.

## Client

Client mainly has 3 pages, login, submit vehicle information and view submissions.

### Running locally

first ensure the "AxiosInstance.ts" and "auth.ts" endpoints are routed to "http://localhost:4000" to run locally, then run the command:

```
npm start
```

and the frontend will be started.

#### Folder structure and architecture:

The frontend structure is designed to maintain a modular and scalable architecture, with components, hooks, services, and utilities organized in a clear hierarchy. Below is a breakdown of the key directories:

```
src/                  # Main source folder for all frontend code
├── components/       # UI components for the application
│   ├── primitive/    # Basic foundational components (used across the app)
│   │   ├── SubmitButton.tsx  # Button component
│   │   ├── PasswordInput.tsx   # Input component
│   ├── LoginForm.tsx    # Login form component
│   ├── PicturesField.tsx # Pictures upload component
├── hooks/            # Custom hooks for better modularity
│   ├── useLoginForm.ts  # Hook for handling login form state and validation
│   ├── useLoginPage.ts  # Hook for managing login page-specific logic
├── pages/            # Pages of the application, representing different routes
│   ├── VehicleFormPage.tsx      # for the submission form component
│   ├── Login.tsx     # Login page component
│   ├── VehicleViewPage.tsx # submissions view page component
├── services/         # Services for API calls, routing, and state management
│   ├── api/          # API endpoint functions
│   │   ├── auth.ts # File for defining API endpoints
│   ├── router/       # React Router and private route-related files
│   │   ├── PrivateRoute.tsx # PrivateRoute component to protect routes
│   │   ├── router.tsx    # Main routing logic
│   ├── state/         # State management using Zustand
│   │   ├── auth.ts    # Zustand store for managing authentication state
├── utils/             # Utility files for constants, types, and styles
│   ├── constants.ts   # File for defining constants used across the app
│   ├── types.ts       # File for defining TypeScript types
```

### What i am proud of:

Implementing new things i recently learnt such as jwt authentication and authorization, private routes, "hook logic", modular components, clean code practices.

i implemented snackbar, useMediaQuery, Skeletons etc first time in this project, which were not an explicit requirement, and obviously, i really loved how they enhanced the user experience of my application.

### Map keys are unique

One of the problems when listing using .map function is having the key as index, which, when changed, causes all other elements' keys to be changed so, instead, i figured out unique ways to have keys, such as image names and urls.

### Further Improvements:

when making, I didnt realize i will be having 3-4 components for vehicle view submissions page and will have so much prop drilling. We can use another Store "VehicleStore" to store items fetched from mongodb.


Lastly, I am open to any constructive critisism on my project.