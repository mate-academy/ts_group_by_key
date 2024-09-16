type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T):GroupsMap<T> {
  return items.reduce((grouped:GroupsMap<T>, item:T) => {
    const sortKey = String(item[key]);

    if (!grouped[sortKey]) {
      Object.assign(grouped, { [sortKey]: [] });
    }

    grouped[sortKey].push(item);

    return grouped;
  }, {} as GroupsMap<T>);
}
