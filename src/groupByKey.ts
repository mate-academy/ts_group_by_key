type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue = <string>item[key];

    if (!result[itemValue]) {
      result[itemValue] = [];
    }

    result[itemValue].push(item);
  });

  return result;
}
