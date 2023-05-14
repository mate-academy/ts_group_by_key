type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentValue = String(item[key]);

    if (!(currentValue in obj)) {
      obj[currentValue] = [];
    }

    obj[currentValue].push(item);
  });

  return obj;
}
