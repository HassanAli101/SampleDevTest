# RhodiumDevTest

A repository which holds code for full-stack developer application assignment for Rhodium Tech

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
│   └── vehicleService.ts      # Service for handling vehicle-related logic (CR operations)
│
├── utils/                    # Contains utility files and helper functions
│   ├── constants.ts           # Stores constants such as paths, etc.
│   ├── dbConnection.ts       # Establishes DB connection and configuration
│   ├── loadEnvVars.ts        # Loads environment variables from .env.local file
│   ├── populateUsers.ts      # Populates initial users into the database
│   ├── types.ts              # TypeScript types for the application
│   └── logger.ts             # Configures and manages logging
│
└── index.ts                  # Main application entry point, initializing Express server
```

### Populating users:

as asked in the assignment, only 1 user is populated manually. there is no registration process. to do that, run the command:

```
npm run populate-users
```

and a user will be created in the connected mongodb cluster, with the username: "Faraz@RhodiumTech.com"

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
    "username": "Faraz@RhodiumTech.com",
    "password": "123456abc"
  }'
```

it will return a message similar to:

```
{"message":"Login successful","user":{"_id":"<recordID>","username":"Faraz@RhodiumTech.com","password":"$2b$10$CL3atF8lfo78FWeonaMI0umhCjBXluT5boSkaENW1l.WqAnBVSNta","createdAt":"2025-01-11T01:57:04.026Z","updatedAt":"2025-01-11T01:57:04.026Z","__v":0},"token":<personal token>}
```
