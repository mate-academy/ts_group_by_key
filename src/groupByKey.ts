type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const str: string = String(item[key]);

    if (!result[str]) {
      result[str] = [];
    }

    result[str].push(item);
  });

  return result;
}
