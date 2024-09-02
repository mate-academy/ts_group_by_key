type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objects: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = String(item[key]);

    if (!objects[value]) {
      objects[value] = [item];
    } else {
      objects[value].push(item);
    }
  });

  return objects;
}
