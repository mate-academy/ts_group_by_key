type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const elementObj of items) {
    const keyValue = elementObj[key] as string;

    if (keyValue in result) {
      result[keyValue].push(elementObj);
    } else {
      result[keyValue] = [elementObj];
    }
  }

  return result;
}
