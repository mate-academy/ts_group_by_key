type GroupsMap<T> = {
  [key: string]: T[];
};

interface KeyValuePairs {
  [key: string]: string | number;
}

export function groupByKey<T extends KeyValuePairs>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  return items.reduce((acc, item) => {
    const keyValue = item[key];

    if (!acc[keyValue]) {
      acc[keyValue] = [item];
    } else {
      acc[keyValue].push(item);
    }

    return acc;
  }, {} as GroupsMap<T>);
}
