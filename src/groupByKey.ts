type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[], key: keyof object,
): GroupsMap<object> {
  const result: GroupsMap<object> = {};

  items.forEach((item: object) => {
    const keyValue = item[key] as string;

    if (result[keyValue]) {
      result[keyValue].push(item);
    } else {
      result[keyValue] = [item];
    }
  });

  return result;
}
