type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const newValue: keyof T = item[key];

    if (!acc[newValue]) {
      acc[newValue] = [];
    }

    acc[newValue].push(item);

    return acc;
  }, {});
}
