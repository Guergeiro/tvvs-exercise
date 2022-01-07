import { Router } from "express";
import { pokemonRouter } from "./resources/pokemons/route-adapter";

const routes = Router({strict:true});

routes.use("/pokemons", pokemonRouter);

export {routes};
