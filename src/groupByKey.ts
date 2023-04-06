type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, element) => {
    const keyValue = String(element[key]);

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }

    acc[keyValue].push(element);

    return acc;
  }, {});
}
