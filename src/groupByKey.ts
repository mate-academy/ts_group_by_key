type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((data) => {
    const group = String(data[key]);

    if (!result[group]) {
      result[group] = [];
    }

    if (result[group]) {
      result[group].push(data);
    }
  });

  return result;
}
