type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyInNew = item[key] as string;

    if (groupItems[keyInNew]) {
      groupItems[keyInNew].push(item);
    } else {
      groupItems[keyInNew] = [item];
    }
  });

  return groupItems;
}
