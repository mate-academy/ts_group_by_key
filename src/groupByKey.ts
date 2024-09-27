type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prev, item: T): GroupsMap<T> => {
    const itemKey = String(item[key]);
    const newPrev: GroupsMap<T> = { ...prev };

    if (newPrev[itemKey]) {
      newPrev[itemKey].push(item);
    } else {
      newPrev[itemKey] = [item];
    }

    return newPrev;
  }, {});
}
