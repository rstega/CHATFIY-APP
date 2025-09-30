import express from 'express';
import authRouter from './src/router/auth.router.js';
import dotenv from 'dotenv';
import messeagaeRouter from './src/router/messageRouter.js';
import path from 'path';

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 3000;

app.use('/auth', authRouter);
app.use('/message', messeagaeRouter);

try{
  // Serve static assets from frontend/dist
  app.use(express.static(path.join(__dirname, './frontend/dist')));
  
  // Catch-all route for client-side routing
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './frontend/dist/index.html'));
  });
}
catch(err){
  console.error("Error serving static files:", err);
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});