type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item: T): void => {
    const groupValue = <string>item[key];

    if (!groupItems[groupValue]) {
      groupItems[groupValue] = [];
    }

    groupItems[groupValue].push(item);
  });

  return groupItems;
}
