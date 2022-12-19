type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    const groupValue = String(item[key]);

    if (!(groupValue in group)) {
      group[groupValue] = [];
    }

    group[groupValue].push(item);
  });

  return group;
}
