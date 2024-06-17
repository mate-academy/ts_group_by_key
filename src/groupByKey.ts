type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey <T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = String(item[key]);

    if (!(keyValue in obj)) {
      obj[keyValue] = [];
    }

    obj[keyValue].push(item);
  });

  return obj;
}
