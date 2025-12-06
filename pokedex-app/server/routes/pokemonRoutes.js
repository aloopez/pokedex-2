import express from 'express';
import * as pokemonControllers from '../controllers/pokemonControllers.js';

const pokemonRouter = express.Router();

pokemonRouter.get('/pokemon/:name', pokemonControllers.getPokemonData);
pokemonRouter.get('/pokemon-first-gen', pokemonControllers.getPokemonFirstGen);
pokemonRouter.get('/pokemon-second-gen', pokemonControllers.getPokemonSecondGen);
pokemonRouter.get('/pokemon-third-gen', pokemonControllers.getPokemonThirdGen);
pokemonRouter.get('/pokemon-fourth-gen', pokemonControllers.getPokemonFourthGen);
pokemonRouter.get('/pokemon-fifth-gen', pokemonControllers.getPokemonFifthGen);
pokemonRouter.get('/pokemon-sixth-gen', pokemonControllers.getPokemonSixthGen);
pokemonRouter.get('/pokemon-seventh-gen', pokemonControllers.getPokemonSeventhGen);
pokemonRouter.get('/pokemon-eighth-gen', pokemonControllers.getPokemonEighthGen);

export default pokemonRouter;