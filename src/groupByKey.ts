type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const obj of items) {
    const keyValue = obj[key] as string;

    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(obj);
  }

  return result;
}
