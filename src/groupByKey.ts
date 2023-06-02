type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = {} as GroupsMap<T>;

  items.forEach((item) => {
    const group = item[key];

    if (!result[group]) {
      result[group] = [];
    }

    result[group].push(item);
  });

  return result;
}
