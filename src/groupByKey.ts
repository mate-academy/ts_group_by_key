type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  // write code here;
  const result: GroupsMap<R> = {};

  items.forEach((item: R) => {
    const value = item[key];

    if (`${value}` in result) {
      result[`${value}`].push(item);
    } else {
      result[`${value}`] = [item];
    }
  });

  return result;
}
