import fetch from "node-fetch";
import { UseCase } from "../../../usecase";

export type PokemonsResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Array<{
    name: string;
    url: string;
  }>;
};

export class FetchPokemons implements UseCase {
  public async execute<T = PokemonsResponse>() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const json: T = await res.json();
    console.log("fetch done");

    return json;
  }
}
