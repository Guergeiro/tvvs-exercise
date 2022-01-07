import { Request, Response } from "express";
import { UseCase } from "../../usecase";
import { HttpError } from "../../errors/HttpError";

export class GetController {
  readonly #useCase: UseCase;

  public constructor(useCase: UseCase) {
    this.#useCase = useCase;
  }

  public async handle(request: Request, response: Response) {
    try {
      const {results} = await this.#useCase.execute();
      return response.status(200).send(results);
    } catch (err) {
      if (err instanceof HttpError) {
        return response.status(err.status).send({ error: err.message });
      }
      const newError = new HttpError(500);
      return response.status(500).send({ error: newError.message });
    }
  }
}
