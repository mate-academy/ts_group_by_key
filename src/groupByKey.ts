type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objectsInGroup: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyObject = String(item[key]);

    if (keyObject in objectsInGroup) {
      objectsInGroup[keyObject].push(item);
    } else {
      objectsInGroup[keyObject] = [item];
    }
  });

  return objectsInGroup;
}
