type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: keyof object):
GroupsMap<object> {
  const groupedObj: GroupsMap<object> = {};

  items.forEach((item) => {
    const value = item[key];

    if (!groupedObj[value]) {
      groupedObj[value] = [item];
    } else {
      groupedObj[value].push(item);
    }
  });

  return groupedObj;
}
