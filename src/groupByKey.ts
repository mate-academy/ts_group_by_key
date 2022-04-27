type GroupsMap<T> = {
  [key: string]: Array<T>;
};

export function groupByKey<T>(
  items: Array<T>,
  key: keyof T,
): GroupsMap<T> {
  const outObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const tempKey: string = String(item[key]);

    if (!Object.prototype.hasOwnProperty.call(outObj, tempKey)) {
      outObj[tempKey] = [];
    }

    outObj[tempKey].push(item);
  });

  return outObj;
}
