import axios from "axios";

const getPokemonData = async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(404).json({ message: "Pokemon not found" });
  }
};

const getPokemonFirstGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=151"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching first generation Pokemon" });
  }
};

const getPokemonSecondGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching second generation Pokemon" });
  }
};

const getPokemonThirdGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=134&offset=251"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching third generation Pokemon" });
  } 
};

const getPokemonFourthGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=106&offset=386"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching fourth generation Pokemon" });
  }
};

const getPokemonFifthGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=156&offset=458"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching fifth generation Pokemon" });
  }
};

const getPokemonSixthGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=72&offset=614"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching sixth generation Pokemon" });
  }
};

const getPokemonSeventhGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=88&offset=686"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching seventh generation Pokemon" });
  }
};

const getPokemonEighthGen = async (req, res) => {
  try {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?limit=96&offset=774"
    );
    res.status(200).json(response.data.results);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching eighth generation Pokemon" });
  }
};

const getAllPokemon = async (req, res) => {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1328");
    res.status(200).json(response.data.results);
    } catch (error) {
    res.status(500).json({ message: "Error fetching all Pokemon" });
  }
};

export {
  getPokemonData,
  getPokemonFirstGen,
  getPokemonSecondGen,
  getPokemonThirdGen,
  getPokemonFourthGen,
  getPokemonFifthGen,
  getPokemonSixthGen,
  getPokemonSeventhGen,
  getPokemonEighthGen,
};
