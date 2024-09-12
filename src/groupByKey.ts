type GroupsMap<T> = {
  [key: string]: T[];
};

type Item = string | number;

export function groupByKey<T extends Item>(
  items: T[], key: keyof T,
): GroupsMap<T> {
  const object: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue: string | number = item[key] as string | number;

    if (!object[keyValue]) {
      object[keyValue] = [];
    }

    object[keyValue].push(item);
  });

  return object;
}
