type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const sort = String(item[key]);

    if (!groupItems[sort]) {
      groupItems[sort] = [];
    }

    groupItems[sort].push(item);
  });

  return groupItems;
}
