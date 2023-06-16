type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groupItem: GroupsMap<T> = {};

  items.forEach((item) => {
    const newItem = item[key] as unknown as string;

    if (newItem in groupItem) {
      groupItem[newItem].push(item);
    } else {
      groupItem[newItem] = [item];
    }
  });

  return groupItem;
}
