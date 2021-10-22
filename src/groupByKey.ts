type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    const keyString = String(el[key]);

    if (!result[keyString]) {
      result[keyString] = [el];
    } else {
      result[keyString].push(el);
    }
  });

  return result;
}
