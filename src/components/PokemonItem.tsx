import * as React from "react";
import styled from "styled-components";
import { ColorMap } from "../enums/Colors";

const PokemonName = styled.div`
  font-size: 14px;
  color: white;
  font-weight: 600;
`;

const Wrapper = styled.div`
  width: 155px;
  height: 111px;
  background-color: ${(props: any) => ColorMap.get(props.type)};
  border-radius: 20px;
  position: relative;
  padding: 24px 16px;
  box-sizing: border-box;
  margin-bottom: 10px;
  overflow: hidden;
`;

export interface PokemonItemProps {
  name: string;
  type: Array<string>;
  image: string;
}

const PokemonType = styled.div`
  font-size: 8px;
  font-family: CircularStd;
  color: white;
  margin: 5px 0;
  background-color: ${(props: any) => ColorMap.get(props.type)};
  opacity: 0.4;
  width: min-content;
  padding: 4px 8px;
  border-radius: 38px;
`;

const Image = styled.img`
  width: 76px;
  height: 71px;
  position: absolute;
  right: 13px;
  bottom: 8px;
  z-index: 2;
`;

const PokebalImage = styled.img`
  width: 80px;
  height: 74px;
  position: absolute;
  right: -10px;
  bottom: -10px;
  opacity: 0.3;
`;

export default function PokemonItem(props: PokemonItemProps) {
  const { name, type, image } = props;
  return (
    <Wrapper type={type[0]}>
      <PokemonName> {name} </PokemonName>
      <PokemonType> {type[0]} </PokemonType>
      {type[1] && <PokemonType> {type[1]} </PokemonType>}
      <Image src={image} />
      <PokebalImage src={"pokeball.svg"} />
    </Wrapper>
  );
}
