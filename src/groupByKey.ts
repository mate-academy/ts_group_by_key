type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element) => {
    const elementKey = String(element[key]);

    if (elementKey in result) {
      result[elementKey].push(element);
    } else {
      result[elementKey] = [element];
    }
  });

  return result;
}
