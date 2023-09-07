type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const groupName: string = String(item[key]);

    if (!result[groupName]) {
      result[groupName] = [];
    }

    result[groupName].push(item);
  });

  return result;
}
