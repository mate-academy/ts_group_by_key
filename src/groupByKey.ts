type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: any[], key: string): any {
  const groupedObj: GroupsMap<any> = {};

  items.map((item) => {
    if (groupedObj[item[key]] === undefined) {
      groupedObj[item[key]] = [];
      groupedObj[item[key]].push(item);
    } else {
      groupedObj[item[key]].push(item);
    }

    return true;
  });

  return groupedObj;
}
