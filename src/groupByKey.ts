type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  /* eslint-disable-next-line */
  for (const item of items) {
    const keyValue = item[key] as string;

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);
  }

  return result;
}
