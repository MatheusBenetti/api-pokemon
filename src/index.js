import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// eslint-disable-next-line import/extensions
import router from './routes/pokemonRoutes.js';

dotenv.config();

const app = express();

mongoose
  .connect(process.env.LOCAL_DB)
  .then(console.log('DB connection successful.'));

app.use(router);

app.listen(3000, (req, res) => {
  console.log('App running on port 3000');
});
