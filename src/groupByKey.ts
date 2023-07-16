type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const newKey = <string>item[key];

    if (!(newKey in result)) {
      result[newKey] = [];
    }

    result[newKey].push(item);
  });

  return result;
}
