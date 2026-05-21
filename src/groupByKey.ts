type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap {
  return items.reduce((acc, item) => {
    const groupValue = String(item[key]);

    if (!acc[groupValue]) {
      acc[groupValue] = [];
    }

    acc[groupValue].push(item);

    return acc;
  }, {} as GroupsMap<T>);
}
