type GroupsMap<T> = {
  [key: string]: Array<T>;
};

export function groupByKey<T>(items: Array<T>,
  key: string): GroupsMap<T> {
  const outObj: GroupsMap<T> = {};

  let tempKey: string | number;

  for (let i: number = 0; i < items.length;) {
    tempKey = items[i][key];

    if (!Object.prototype.hasOwnProperty.call(outObj, tempKey)) {
      outObj[tempKey] = [];
    }
    outObj[tempKey].push(items[i]);

    i += 1;
  }

  return outObj;
}
