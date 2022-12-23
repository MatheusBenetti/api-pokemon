import express from 'express';
// eslint-disable-next-line import/extensions
import router from './routes/pokemonRoutes.js';

const app = express();

app.use(router);

app.listen(3000, (req, res) => {
  console.log('App running on port 3000');
});
