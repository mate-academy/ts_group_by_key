type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, el) => {
    const keyValue = el[key] as string;

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }

    acc[keyValue].push(el);

    return acc;
  }, {});
}
