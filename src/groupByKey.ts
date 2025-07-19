type GroupsMap<T, K extends keyof T> = {
  [P in string & `${T[K]}`]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: keyof K
): GroupsMap<T, K> {
  const newArr = {} as GroupsMap<T, K>;

  for (const item of items) {
    const keyValue = String(item[key]) as keyof GroupsMap<T, K>;

    if (!newArr[keyValue]) {
      newArr[keyValue] = [];
    }

    newArr[keyValue].push(item);
  }

  return newArr;
}
