type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends { [key: string]: number | string }>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const initialAcc: GroupsMap<T> = {};

  return items.reduce((acc, item) => {
    const value = item[key];

    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(item);

    return acc;
  }, initialAcc);
}
