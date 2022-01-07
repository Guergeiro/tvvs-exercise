import { UseCase } from "../../usecase";
import { GetController } from "./get-controller";

class FetchPokemonsFake implements UseCase {
  // eslint-disable-next-line
  public async execute<T = any>() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const out: any = {
      count: 2,
      results: [
        {
          name: "Breno Salles",
          url: "https://brenosalles.com",
        },
        { name: "Diogo Costa", url: "https://diogomcosta.com" },
      ],
    };
    return out;
  }
}

describe("Get Controller Test", function () {
  test("It builds", function () {
    const controller = new GetController(new FetchPokemonsFake());
    expect(controller).toBeTruthy();
  });
});
