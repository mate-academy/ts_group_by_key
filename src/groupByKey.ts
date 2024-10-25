type GroupsMap<T> = {
  [key: string | number]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, item: T) => {
    const value = item[key] as string | number;

    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(item);
    
    return acc;
  }, {});
}
