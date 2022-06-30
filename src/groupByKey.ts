type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedObj: GroupsMap<T> = {};

  items.forEach((obj) => {
    const newKeyName = String(obj[key]);

    if (!groupedObj[newKeyName]) {
      groupedObj[newKeyName] = [];
    }

    groupedObj[newKeyName].push(obj);
  });

  return groupedObj;
}
