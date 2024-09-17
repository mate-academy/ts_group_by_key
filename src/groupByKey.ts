type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: any,
  key: string,
): GroupsMap<typeof items> {
  return items.reduce((acc: object, curr: object) => {
    const valueKey: string = curr[key];

    if (!acc[valueKey]) {
      acc[valueKey] = [curr];

      return acc;
    }

    acc[valueKey].push(curr);

    return acc;
  }, {});
}
