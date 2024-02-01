type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupedByKey: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupValue = String(item[key]);

    if (!groupedByKey[groupValue]) {
      groupedByKey[groupValue] = [item];
    } else {
      groupedByKey[groupValue].push(item);
    }
  });

  return groupedByKey;
}
