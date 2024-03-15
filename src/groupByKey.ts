type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result: GroupsMap<T>, item: T) => {
    const itemValue = <string>item[key];
    const group = result[itemValue] || [];

    group.push(item);

    return { ...result, [itemValue]: group };
  }, {});
}
