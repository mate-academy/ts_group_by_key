type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
 ): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  for (const item of items) {
    const groupName = String(item[key]);

    if(!result[groupName]) {
      result[groupName] = [];
    }

    result[groupName].push(item);
  }

  return result;
}
