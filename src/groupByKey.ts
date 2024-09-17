type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const property = String(item[key]);

    if (!group[property]) {
      group[property] = [];
    }

    group[property].push(item);
  });

  return group;
}
