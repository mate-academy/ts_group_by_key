type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const objectWithGroup: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupKeys = `${item[key]}`;

    if (!Object.prototype.hasOwnProperty.call(objectWithGroup, groupKeys)) {
      objectWithGroup[groupKeys] = [];
    }

    objectWithGroup[groupKeys].push(item);
  });

  return objectWithGroup;
}
