type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item) => {
    const value = item[key] as string;

    if (acc[value] === undefined) {
      acc[value] = [];
    }

    acc[value].push(item);

    return acc;
  }, {});
}
