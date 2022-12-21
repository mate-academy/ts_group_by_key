type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result = {};

  items.forEach((el: T) => {
    const sorted = String(el[key]);

    if (result[sorted]) {
      result[sorted].push(el);
    } else {
      result[sorted] = [el];
    }
  });

  return result;
}
