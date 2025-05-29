type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    const value = String(element[key]);

    if (!result[value]) {
      result[value] = [];
    }

    result[value].push(element);
  });

  return result;
}
