type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  return items.reduce((result, currentItem) => {
    const newKey = currentItem[key] as string;

    if (result[newKey]) {
      result[newKey].push(currentItem);
    } else {
      result[newKey] = [currentItem];
    }

    return result;
  }, {} as GroupsMap<T>);
}
