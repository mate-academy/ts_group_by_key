type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key: string): any {
  const groupedObj: GroupsMap<any> = {};

  items.forEach((item) => {
    const itemKey = item[key];

    if (itemKey in groupedObj) {
      groupedObj[itemKey].push(item);
    } else {
      groupedObj[itemKey] = [];
      groupedObj[itemKey].push(item);
    }

    return true;
  });

  return groupedObj;
}
