type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:[], key:keyof T):GroupsMap<T> {
  const result:GroupsMap<T> = {};

  items.forEach((item) => {
    const prop = item[key];

    if (!result[prop]) {
      result[prop] = [item];
    } else {
      result[prop].push(item);
    }
  });

  return result;
}
