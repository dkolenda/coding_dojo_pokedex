export enum Types {
  Electric = "Electric",
  Fire = "Fire",
  Grass = "Grass",
  Water = "Water"
}

export enum Colors {
  yellow = "#ffce4b",
  red = "	#fb6c6c",
  green = "#48d0b0",
  blue = "#77bdfe"
}

export const ColorMap = new Map([
  [Types.Electric, Colors.yellow],
  [Types.Fire, Colors.red],
  [Types.Grass, Colors.green],
  [Types.Water, Colors.blue]
]);
