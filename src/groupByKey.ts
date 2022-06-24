type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key): GroupsMap<object> {
  const groupedObj: GroupsMap<object> = {};

  items.forEach((object) => {
    const value = object[key];

    if (groupedObj[value]) {
      groupedObj[value].push(object);
    } else {
      groupedObj[value] = [object];
    }
  });

  return groupedObj;
}
