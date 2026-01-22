type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupName = String(item[key]) as string;

    if (!result[groupName]) {
      result[groupName] = [];
    }
    result[groupName].push(item);
  });

  return result;
}
