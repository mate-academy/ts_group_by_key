type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: Array<object>, key: keyof object,
): GroupsMap<object> {
  const groupedItems: GroupsMap<object> = {};
  const keysValues: string[] = [];

  items.forEach((value: object) => {
    if (!keysValues.includes(value[key])) {
      keysValues.push(value[key]);
    }
  });

  keysValues.forEach((value: string) => {
    groupedItems[value] = items.filter((item: object) => item[key] === value);
  });

  return groupedItems;
}
