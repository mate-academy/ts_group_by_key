type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: string): GroupsMap<T> {
  const resultObject: GroupsMap<T> = {};

  items.forEach((item, index) => {
    const itemKey = item[key as string];

    if (Object.hasOwn(resultObject, `${itemKey}`) === false) {
      resultObject[`${item[key as string]}`] = [items[index]];
    }

    if (Object.hasOwn(resultObject, `${item[key as string]}`) === true) {
      resultObject[`${item[key]}`].push(items[index]);
    }
  });

  return resultObject;
}
