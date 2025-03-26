type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue = item[key] as string;

    if (!obj.hasOwnProperty(keyValue)) {
      obj[keyValue] = [];
    }

    obj[keyValue].push(item);
  });

  return obj;
}
