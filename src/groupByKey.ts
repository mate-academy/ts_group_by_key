type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const itemValue: T[keyof T] = item[key];

    if (!groupItems[String(itemValue)]) {
      groupItems[String(itemValue)] = [];
    }

    groupItems[String(itemValue)].push(item);
  });

  return groupItems;
}
