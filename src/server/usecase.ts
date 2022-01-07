export interface UseCase {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  execute<T>(context?: Record<string, any>): Promise<T>;
}
