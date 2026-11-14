type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const idkwhat = items.reduce((acc, currentItem) => {
    const newKey = String(currentItem[key]);

    if (!acc[newKey]) {
      acc[newKey] = [];
    }

    acc[newKey].push(currentItem);

    return acc;
  }, {} as GroupsMap<T>);

  return idkwhat;
}
