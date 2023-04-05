type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((accumulator: GroupsMap<T>, currentItem: T) => {
    const keyValue = currentItem[key] as unknown as string;

    if (!accumulator[keyValue]) {
      accumulator[keyValue] = [];
    }
    accumulator[keyValue].push(currentItem);

    return accumulator;
  }, {});
}
