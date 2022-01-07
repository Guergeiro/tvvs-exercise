import { HttpMessages } from "../constants/HttpMessages";

export class HttpError extends Error {
  readonly #status: number;

  public constructor(status: number, message?: string) {
    super(message || HttpMessages.get(status));
    this.#status = status;
    this.name = "HttpError";
  }

  get status() {
    return this.#status;
  }
}
