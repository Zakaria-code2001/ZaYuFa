# ZaYuFa

A full-stack project with a **Node.js/Express** backend and an **Angular** frontend.

- **backend/**: Contains the Node.js/Express server code.
- **frontend/**: Contains the Angular application.

---

## 1️⃣ Backend Setup and Usage

1. **Navigate to the `backend` folder**:

   ```sh
   cd backend
   ```

   Install dependencies:

   ```sh
   npm install
   ```

Available Scripts (from backend/package.json):

```sh
"scripts": {
"serve": "node index.js",
"dev": "nodemon index.js"
}
```

Starts the server using Node (index.js).

```sh
npm run serve
```

Starts the server in development mode with automatic restarts via Nodemon.

```sh
npm run dev:
```

Run the Server:

For a one-time start:

```sh
npm run serve
```

For auto-restart on file changes:

```sh
npm run dev
```

The backend should now be running on http://localhost:3000 (or whichever port is defined in index.js).

## 2️⃣ Frontend Setup and Usage

Navigate to the frontend folder:

```sh
cd ../frontend
```

Install dependencies:

```sh
npm install
```

```sh
Start the Development Server:
```

```sh
ng serve --open
```

This will open http://localhost:4200 in your browser, showing the Angular app.
Build for Production
If you want to build the Angular app for production deployment (which outputs to dist/):

```sh
ng build
```

The compiled files will be in frontend/dist/ (or dist/<app-name>).
You can serve those static files from your Node.js server if desired (by adjusting the index.js to use express.static).

## 3️⃣ Updating the Project

Backend Updates:
If you modify the server code (index.js or other files in backend), simply restart the server:

```sh
npm run dev
```

or

```sh
re-run
```

```sh
npm run serve
```

if you’re not using Nodemon.

Frontend Updates:
For new Angular components, services, or dependencies:

Make changes in the frontend/src/ files.
Re-run:

```sh
ng serve
```

if the dev server was stopped, or let it auto-reload if it’s still running.

## 4️⃣ Putting It All Together

In one terminal, run the backend:

```sh
cd backend
npm run dev
```

In another terminal, run the frontend:

```sh
cd frontend
ng serve --open
```

Open:
Backend: http://localhost:3000
Frontend: http://localhost:4200
Your Node.js API will be accessible at port 3000, and your Angular app at port 4200.

### When you perform an Angular production build (ng build) and then run your Express server, confirm the full project is working by accessing it through the backend port (e.g., http://localhost:3000)

## 5️⃣ Troubleshooting

Port Conflicts: If 3000 or 4200 is already in use, change the port in index.js (backend) or in angular.json (frontend).
Permission Errors: On some systems, you may need sudo or admin privileges, but it’s best to configure permissions so that’s not necessary.
Missing Scripts: If npm run serve or npm run dev fails, verify your package.json in backend has the correct scripts.
yaml
Copy

---
