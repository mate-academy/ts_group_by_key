type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyForSort: any = item[key];

    if (!result[keyForSort]) {
      result[keyForSort] = [];
    }

    result[keyForSort].push(item);
  });

  return result;
}
