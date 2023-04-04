type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objectsInGroup: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = String(item[key]);
    const objProtoOfNewKey
    = Object.prototype.hasOwnProperty.call(objectsInGroup, newKey);

    if (objProtoOfNewKey) {
      objectsInGroup[newKey].push(item);
    } else {
      objectsInGroup[newKey] = [item];
    }
  });

  return objectsInGroup;
}
