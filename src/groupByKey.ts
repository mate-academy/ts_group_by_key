interface Item {
  id: number;
  color: string;
  country: string;
}

export function groupByKey<T>(objects: T[], key: keyof T): Item[] {
  const initial = objects.map((object) => ({ ...object }));
  const result: Record<string, T[]> = {};

  initial.forEach((object: any) => {
    const keyValue = object[key] as string;

    if (!(keyValue in result)) {
      result[keyValue] = [object];
    } else {
      (result[keyValue]).push(object);
    }
  });

  return result;
}
