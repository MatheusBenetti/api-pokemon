import express from 'express';
import {
  getPokemonById,
  getPokemonByName,
  listAllPokemon
  // eslint-disable-next-line import/extensions
} from '../controller/pokemonController.js';

const router = express.Router();

router.route('/api/v1/pokedex/:id').get(getPokemonById);
router.route('/api/v1/pokedex/:name').get(getPokemonByName);
router.route('/api/v1/list-all').get(listAllPokemon);

export default router;
