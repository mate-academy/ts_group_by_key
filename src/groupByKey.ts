type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((person) => {
    const resultKey = String(person[key]);

    if (!Object.prototype.hasOwnProperty.call(result, resultKey)) {
      result[resultKey] = [];
    }

    result[resultKey].push(person);
  });

  return result;
}
