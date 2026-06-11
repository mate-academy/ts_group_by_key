type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((result, currentItem) => {
    const groupValue = String(currentItem[key]);

    if (!result[groupValue]) {
      result[groupValue] = [];
    }

    result[groupValue].push(currentItem);

    return result;
  }, {} as GroupsMap<T>);
}
