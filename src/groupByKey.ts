type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    const groupKey = String(element[key]);

    if (!Object.prototype.hasOwnProperty.call(result, groupKey)) {
      result[groupKey] = [];
    }

    result[groupKey].push(element);
  });

  return result;
}
