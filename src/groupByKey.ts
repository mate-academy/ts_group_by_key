type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T1>(
  items: T1[],
  key: keyof T1,
): GroupsMap<T1> {
  const result: GroupsMap<T1> = {};

  items.forEach((item) => {
    const itemValByKey = String(item[key]);

    if (itemValByKey in result === false) {
      result[itemValByKey] = [];
    }

    result[itemValByKey].push(item);
  });

  return result;
}
