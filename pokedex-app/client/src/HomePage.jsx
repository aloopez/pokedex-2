import { useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  // const [pokemonData, setPokemonData] = useState([]);

  // const fetchGen = async (gen) => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:3001/api/pokemon-${gen}-gen`
  //     );
  //     const data = await response.json();
  //     setPokemonData(data);
  //     console.log(`${gen} generation loaded:`, data);
  //   } catch (error) {
  //     console.error(`Error fetching ${gen} generation:`, error);
  //   }
  // };

  const generations = [
    { id: "first", label: "Primera" },
    { id: "second", label: "Segunda" },
    { id: "third", label: "Tercera" },
    { id: "fourth", label: "Cuarta" },
    { id: "fifth", label: "Quinta" },
    { id: "sixth", label: "Sexta" },
    { id: "seventh", label: "Séptima" },
    { id: "eighth", label: "Octava" },
  ];

  return (
    <>
      <div>
        <h1>Welcome to the Pokedex App</h1>
        <p>Explore and discover information about various Pokémon!</p>
        {generations.map((gen) => (
          <Link key={gen.id} to={`/${gen.id}-gen`}>
            {gen.label} Generación
          </Link>
        ))}
      </div>
    </>
  );
}

export default HomePage;
