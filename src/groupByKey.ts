type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items:T[], key:keyof T):GroupsMap<T> {
  // write code here;
  const result:GroupsMap<T> = {};

  items.forEach((item) => {
    const resValue = String(item[key]);

    if (!result[resValue]) {
      result[resValue] = [item];
    } else {
      result[resValue].push(item);
    }
  });

  return result;
}
