type GroupsMap<T> = {
  [key: string]: T[];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function groupByKey<T>(items: T[], key: keyof T) {
  return items.reduce<GroupsMap<T>>((acc, item) => {
    const groupKey: string = String(item[key]);

    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    acc[groupKey].push(item);

    return acc;
  }, {});
}
