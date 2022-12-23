type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupItems: GroupsMap<T> = {};

  items.forEach((item) => {
    const sortValue = String(item[key]);

    if (!groupItems[sortValue]) {
      groupItems[sortValue] = [];
    }
    groupItems[sortValue].push(item);
  });

  return groupItems;
}
