export function detectForm<T>(id: string | number, f1: T, f2: T): T {
  if (id === 'ADD') {
    return f1;
  }
  return f2;
}
