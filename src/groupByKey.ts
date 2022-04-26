type GroupsMap<T> = {
  [key: string]: Array<T>;
};

export function groupByKey<T>(
  items: Array<T>,
  key: string,
): GroupsMap<T> {
  const outObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const tempKey: string | number = item[key];

    if (!Object.prototype.hasOwnProperty.call(outObj, tempKey)) {
      outObj[tempKey] = [];
    }

    outObj[tempKey].push(item);
  });

  return outObj;
}
