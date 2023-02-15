type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.map((item) => item[key])
    .forEach((value) => {
      const keyOfItem = String(value);

      if (!(keyOfItem in result)) {
        result[keyOfItem] = items
          .filter((item) => item[key] === value);
      }
    });

  return result;
}
