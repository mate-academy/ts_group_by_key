type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupItem: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyValue: any = item[key];

    if (keyValue in groupItem) {
      groupItem[keyValue].push(item);
    } else {
      groupItem[keyValue] = [item];
    }
  });

  return groupItem;
}
