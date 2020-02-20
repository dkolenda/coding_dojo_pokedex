import * as React from "react";
import styled from "styled-components";
import PokemonItem from "../components/PokemonItem";
import { Types } from "../enums/Colors";
import { getPokemon } from "../enums/PokemonArray";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const Nav = styled.div`
  width: 100%;
  height: 15%;
`;

const PokemonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: space-around;
`;
const Title = styled.h1`
  color: #303943;
  font-size: 30px;
  font-family: CircularStd-Black;
`;

export default function Pokedex() {
  const [pokemonArray, setPokemonArray] = useState(new Array());

  useEffect(() => {
    setPokemonArray(getPokemon());
  }, []);

  return (
    <Wrapper>
      <Nav />
      <Title> Pokedex </Title>
      <PokemonWrapper>
        {pokemonArray.map(el => {
          return (
            <PokemonItem
              key={el.name}
              name={el.name}
              image={el.image}
              type={el.type}
            />
          );
        })}
      </PokemonWrapper>
    </Wrapper>
  );
}
