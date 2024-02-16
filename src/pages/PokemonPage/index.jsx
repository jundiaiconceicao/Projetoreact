import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CardPokemon from "../../components/CardPokemon";
import axios from "axios";
import "./styles.css";
import { Box } from "@mui/material";

const PokemonPage = () => {
  const [referenciasPokemons, setReferenciasPokemons] = useState([]);
  const [listaPokemons, setListaPokemons] = useState([]);
  const [loader, setLoader] = useState(true);

  const pegar100ReferenciasPokemons = async () => {
    try {
      const resposta = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      setReferenciasPokemons(resposta.data.results);
    } catch (error) {
      console.error("Erro ao buscar as referencias dos pokemons", error);
    }
  };

  useEffect(() => {
    pegar100ReferenciasPokemons();
  }, []);

  const pegarListaDePokemons = async () => {
    setLoader(true);
    const listaTemporaria = [];

    for (const referencia of referenciasPokemons) {
      try {
        const resposta = await axios.get(referencia.url);
        listaTemporaria.push(resposta.data);
      } catch (error) {
        console.error("Erro ao buscar o pokemon", error);
      }
    }

    setListaPokemons(listaTemporaria);
    setLoader(false);
  };

  useEffect(() => {
    pegarListaDePokemons();
  }, [referenciasPokemons]);

  return (
    <div className="pokemon-container">
      {listaPokemons.map((pokemon) => (
        <CardPokemon
          nome={pokemon.name}
          foto={pokemon.sprites.front_default}
          id={pokemon.id}
          url={pokemon.forms[0].url}
        />
      ))}
      {loader && (
        <Box
          width={'100%'}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          marginTop={'100px'}
        >
          <CircularProgress className="loader"></CircularProgress>
        </Box>
      )}
    </div>
  );
};

export default PokemonPage;
