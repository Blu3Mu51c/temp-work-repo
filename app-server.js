import "dotenv/config.js";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors"

//API Route Imports
import checkToken from "./config/checkToken.js";
import userRoutes from "./routes/api/users.js";
import adminRoutes from "./routes/api/admin.js";
import roleRoutes from "./routes/api/roleRoutes.js";
import itemsRoutes from "./routes/api/items.js";
import ordersRoutes from "./routes/api/orders.js"; 

//Express
const app = express()

const __filename = fileURLToPath(import.meta.url); 
const __dirname = path.dirname(__filename);

// Core middleware
app.use(cors());
app.use(express.json());

// Attach req.user if a JWT is present (must be before routes)
app.use(checkToken);

// Optional per-request stash
app.use((req, res, next) => {
  res.locals.data = {};
  next();
});

// ---------- API ROUTES ----------
app.use("/api/users", userRoutes);
app.use("/api/users", adminRoutes);
app.use("/api/roles", roleRoutes);
app.use("/api/items", itemsRoutes);
app.use("/api/orders", ordersRoutes);
// ---------- STATIC / REACT ----------
const staticDir = process.env.NODE_ENV === 'production' ? 'dist' : 'public';
const indexPath = process.env.NODE_ENV === 'production' ? 'dist/index.html' : 'index.html';

app.use(express.static(staticDir));

// Unknown API endpoints (after all API routers)
app.get(/.*/, (req, res) => {
    // Serve the React app for all other routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.resolve(path.join(__dirname, indexPath)));
});

export default app; /* You better have this in your project */