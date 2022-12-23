import axios from 'axios';

export const getPokemonById = async (req, res) => {
  try {
    const { id } = req.params;

    const pokemon = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) =>
        res.json({
          id: response.data.id,
          name: response.data.name,
          abilities: response.data.abilities,
          types: response.data.types
        })
      );

    return pokemon;
  } catch (err) {
    res.status(404).json(err);
  }
};

export const getPokemonByName = async (req, res) => {
  try {
    const { name } = req.params;

    const pokemon = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) =>
        res.json({
          id: response.data.id,
          name: response.data.name,
          abilities: response.data.abilities,
          types: response.data.types
        })
      );

    return pokemon;
  } catch (err) {
    res.status(404).json(err);
  }
};

export const listAllPokemon = async (req, res) => {
  try {
    const pokemons = await axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        res.json({ data: response.data });
      });

    return pokemons;
  } catch (err) {
    res.status(404).json(err);
  }
};
