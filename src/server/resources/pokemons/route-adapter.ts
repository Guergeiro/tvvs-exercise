import { Router, Request, Response } from "express";
import { GetController } from "./get-controller";
import { FetchPokemons } from "./useCases/FetchPokemons";

const pokemonRouter = Router({ strict: true });

const getController = new GetController(new FetchPokemons());

pokemonRouter.get("/", function (request: Request, response: Response) {
  return getController.handle(request, response);
});

export { pokemonRouter };
