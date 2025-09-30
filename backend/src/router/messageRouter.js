import express from 'express';
const messeagaeRouter = express.Router();

messeagaeRouter.get('/', (req, res) => {
  res.send('this message or router !');
});

export default messeagaeRouter