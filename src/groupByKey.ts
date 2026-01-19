type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) {
  return items.reduce((groups: GroupsMap<T>, item: T) => {
    const groupValue = String(item[key]);
    if (!groups[groupValue]) {
      groups[groupValue] = [];
    }

    groups[groupValue].push(item);
    return groups;
  }, {});
}
