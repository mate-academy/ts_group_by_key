type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((groups, item) => {
    const groupValue: string = String(item[key]);

    if (!(groupValue in groups)) {
      groups[groupValue] = [];
    }

    groups[groupValue].push(item);

    return groups;
  }, {} as GroupsMap<T>);
}
