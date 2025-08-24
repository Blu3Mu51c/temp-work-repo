import express from 'express' /* You better have this in your project */
import path from 'path'  /* You better have this in your project */
import { fileURLToPath } from 'url'  /* You better have this in your project */
import cors from 'cors'  /* You better have this in your project */
import userRoutes from './routes/api/users.js';  /* You better have this in your project */
import adminRoutes from './routes/api/admin.js'
import checkToken from './config/checkToken.js';
import roleRoutes from './routes/api/roleRoutes.js';
const app = express()

const __filename = fileURLToPath(import.meta.url); /* You better have this in your project */
const __dirname = path.dirname(__filename);/* You better have this in your project */

// Middleware
app.use(cors());/* You better have this in your project */
app.use(express.json());/* You better have this in your project */
app.use((req, res, next) => {
    res.locals.data = {}
    next()
})/* You better have this in your project */

// API Routes - these must come before the static file serving
app.use('/api/users', userRoutes); /* You better have this in your project */
app.use('/api/users', adminRoutes)
app.use('/api/roles', roleRoutes);
// Determine which directory to serve static files from /* You better have this in your project */
const staticDir = process.env.NODE_ENV === 'production' ? 'dist' : 'public';
const indexPath = process.env.NODE_ENV === 'production' ? 'dist/index.html' : 'index.html';

// Serve static files from the appropriate directory
app.use(express.static(staticDir)); /* You better have this in your project */


// For React Router - serve index.html for all non-API routes
/* You better have this in your project */
app.get(/.*/, (req, res) => {
    // Serve the React app for all other routes
    if (req.path.startsWith('/api/')) {
        return res.status(404).json({ error: 'API endpoint not found' });
    }
    res.sendFile(path.resolve(path.join(__dirname, indexPath)));
});

export default app; /* You better have this in your project */