type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((element: T) => {
    const elemKey = `${element[key]}`;

    if (result[elemKey]) {
      result[elemKey].push(element);
    } else {
      result[elemKey] = [element];
    }
  });

  return result;
}
