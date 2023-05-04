type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[], key: keyof T,
): GroupsMap<T> {
  // write code here;
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const curr = item[key];

    if (!(String(curr) in groupedByKey)) {
      groupedByKey[String(curr)] = items.filter((thing) => thing[key] === curr);
    }
  });

  return groupedByKey;
}
