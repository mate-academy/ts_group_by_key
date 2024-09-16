type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const defaultValue: GroupsMap<T> = {};

  const grouped = items.reduce((acc, currentObject) => {
    const prop = String(currentObject[key]);

    acc[prop] = [...(acc[prop] || []), currentObject];

    return acc;
  }, defaultValue);

  return grouped;
}
