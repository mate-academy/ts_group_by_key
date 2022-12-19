type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedByKey = {};

  items.forEach((item) => {
    const name = item[key].toString();

    if (name in groupedByKey) {
      groupedByKey[name].push(item);
    } else {
      groupedByKey[name] = [item];
    }
  });

  return groupedByKey;
}
