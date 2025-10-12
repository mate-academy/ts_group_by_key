type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc, value) => {
    const keyStr = String(value[key]);

    if (!acc[keyStr]) {
      acc[keyStr] = [];
    }

    acc[keyStr].push(value);

    return acc;
  }, {} as GroupsMap<T>);
}
