type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const element of items) {
    const newKey = String(element[key]);

    if (!result.hasOwnProperty(newKey)) {
      result[newKey] = [];
    }

    result[newKey].push(element);
  }

  return result;
}
