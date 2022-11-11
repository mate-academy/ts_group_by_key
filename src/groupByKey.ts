type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const groupedObjects: GroupsMap<object> = {};

  items.forEach((item: {[key: string]: any}) => {
    if (!Object.prototype.hasOwnProperty.call(groupedObjects, item[key])) {
      groupedObjects[item[key]] = [];
    }

    groupedObjects[item[key]].push(item);
  });

  return groupedObjects;
}
