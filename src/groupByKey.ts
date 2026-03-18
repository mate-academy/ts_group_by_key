type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const el of items) {
    if (Object.hasOwn(el, key)) {
      const groupName: string = String(el[key]);

      if (!Object.hasOwn(result, groupName)) {
        result[groupName] = [];
      }

      result[groupName].push(el);
    }
  }

  return result;
}
