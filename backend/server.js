import express from 'express';
import authRouter from './src/router/auth.router.js';
import dotenv from 'dotenv';
import messeagaeRouter from './src/router/messageRouter.js';

dotenv.config();

const app = express();
const PORT = 4000;

app.use('/auth', authRouter);
app.use('/message', messeagaeRouter);

try {
  // Serve static assets from frontend/dist
  app.use(express.static('./frontend/dist'));
  
  // Catch-all route for client-side routing
  app.get('*', (req, res) => {
    res.sendFile('../frontend/dist/index.html', { root: '.' });
  });
}
catch(err) {
  console.error("Error serving static files:", err);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});