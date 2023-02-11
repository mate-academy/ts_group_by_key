type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, value: T) => {
    const objKey = String(value[key]);

    if (!acc[objKey]) {
      acc[objKey] = [];
    }

    acc[objKey].push(value);

    return acc;
  }, {});
}
