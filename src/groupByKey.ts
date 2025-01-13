type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce<GroupsMap<T>>((groups, item) => {
    const keyValue = item[key] as string;

    groups[keyValue] = groups[keyValue] || [];
    groups[keyValue].push(item);

    return groups;
  }, {});
}
