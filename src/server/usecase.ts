export interface UseCase {
  execute<T>(context?: Record<string, any>): Promise<T>;
}
