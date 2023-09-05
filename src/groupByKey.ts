type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key :keyof T):
GroupsMap<T> {
  const groupedByKey = items.reduce((acc: GroupsMap<T>, current: T) => {
    const currentItemGroup = String(current[key]);

    if (!acc[currentItemGroup]) {
      acc[currentItemGroup] = [];
    }

    acc[currentItemGroup].push(current);

    return acc;
  }, {});

  return groupedByKey;
}
