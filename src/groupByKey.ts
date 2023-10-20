type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const resultKey = String(item[key]);

    if (!(resultKey in groups)) {
      groups[resultKey] = [item];
    } else {
      groups[resultKey] = [...groups[resultKey], item];
    }
  });

  return groups;
}
