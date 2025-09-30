import express from 'express';
import authRouter from './src/router/auth.router.js';
import dotenv from 'dotenv';
import messeagaeRouter from './src/router/messageRouter.js';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT =  4000;

// Fix __dirname for ES modules (Linux & macOS)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routers
app.use('/auth', authRouter);
app.use('/message', messeagaeRouter);

// Serve static assets from frontend/dist (one directory up)
const frontendPath = path.resolve(__dirname, '../frontend/dist');
app.use(express.static(frontendPath));

// Catch-all route for client-side routing (React/Vue/SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
