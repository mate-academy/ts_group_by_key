type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const el of items) {
    if (!(el[key] in result)) {
      const newGroup: T[] = [];

      // eslint-disable-next-line no-restricted-syntax
      for (const element of items) {
        if (el[key] === element[key]) {
          newGroup.push(element);
        }
      }

      result[el[key] as string] = newGroup;
    }
  }

  return result;
}
