type GroupsMap<T> = {
  [key: string]: T[];
};

type ElemObj = {
  [key: string]: any;
};

export function groupByKey(items: ElemObj[], key: string): GroupsMap<object> {
  const groupedObj: GroupsMap<object> = {};

  items.forEach((elem) => {
    if (elem[key] in groupedObj) {
      groupedObj[elem[key]].push(elem);
    } else {
      groupedObj[elem[key]] = [elem];
    }
  });

  return groupedObj;
}
