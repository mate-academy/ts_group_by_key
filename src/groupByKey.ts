type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedMap = items.reduce((acc: GroupsMap<T>, el) => {
    const valueOfKey = el[key] as string;

    if (valueOfKey in acc) {
      acc[valueOfKey].push(el);
    } else {
      acc[valueOfKey] = [el];
    }

    return acc;
  }, {});

  return groupedMap;
}
