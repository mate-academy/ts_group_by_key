type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const value = item[key];

    if (!result[<string>value]) {
      result[<string>value] = [];
    }

    result[<string>value].push(item);
  });

  return result;
}
