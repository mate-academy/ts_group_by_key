type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string):
GroupsMap<{[key: string]: object[]}> {
  const groupedObject: GroupsMap<{[key: string]: object[]}> = {};

  items.forEach((item: {[key: string]: any}) => {
    if (Object.prototype.hasOwnProperty.call(groupedObject, item[key])) {
      groupedObject[item[key]].push(item);
    } else {
      groupedObject[item[key]] = [item];
    }
  });

  return groupedObject;
}
