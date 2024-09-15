type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue: string = item[key] as string;

    result[keyValue] = [...(result[keyValue] || []), item];
  }

  return result;
}
