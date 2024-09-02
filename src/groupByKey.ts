type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator: GroupsMap<T>, element: T) => {
    const keyValue = String(element[key]);

    if (!accumulator[keyValue]) {
      accumulator[keyValue] = [];
    }

    accumulator[keyValue].push(element);

    return accumulator;
  }, {});
}
