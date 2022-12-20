type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const initialValue: GroupsMap<T> = {};

  const result: GroupsMap<T> = items.reduce((prev, value) => {
    const groupKey = String(value[key]);
    const copy = { ...prev };

    if (!(groupKey in prev)) {
      copy[groupKey] = [value];
    } else {
      copy[groupKey].push(value);
    }

    return copy;
  }, initialValue);

  return result;
}
