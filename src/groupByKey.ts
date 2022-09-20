type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<Item>(
  items: Item[], key: keyof Item,
): GroupsMap<Item> {
  // write code here;
  const resultArray: GroupsMap<Item> = {};

  items.forEach((item: Item) => {
    const keyValue: string = `${item[key]}`;

    if (Object.keys(resultArray).indexOf(keyValue) === -1) {
      Object.assign(resultArray, { [keyValue]: [] });
      resultArray[keyValue].push(item);
    } else {
      resultArray[keyValue].push(item);
    }
  });

  return resultArray;
}
