type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, curr: T) => {
    const keyValue = String(curr[key]);

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }

    acc[keyValue].push(curr);

    return acc;
  }, {});
}
