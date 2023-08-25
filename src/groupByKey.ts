type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  /* eslint-disable-next-line */
  for (const item of items) {
    const keyValue = item[key] as string;

    if (!grouped[keyValue]) {
      grouped[keyValue] = [];
    }

    grouped[keyValue].push(item);
  }

  return grouped;
}
