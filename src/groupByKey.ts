type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
):GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const currentKeyValue = String(item[key]);

    if (currentKeyValue in result) {
      result[currentKeyValue].push(item);
    } else {
      result[currentKeyValue] = [item];
    }
  });

  return result;
}
