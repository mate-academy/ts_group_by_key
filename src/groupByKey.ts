type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyObj = String(item[key]);

    if (!result[keyObj]) {
      result[keyObj] = [item];
    } else {
      result[keyObj].push(item);
    }
  });

  return result;
}
