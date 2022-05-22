type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prevObject, item) => {
    const itemField = String(item[key]);
    const sortedObject: GroupsMap<T> = {
      ...prevObject,
    };

    if (sortedObject[itemField]) {
      sortedObject[itemField].push(item);
    } else {
      sortedObject[itemField] = [item];
    }

    return sortedObject;
  }, {});
}
