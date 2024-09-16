type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const groupByValues: GroupsMap<T> = {};

  items.forEach((item) => {
    const value: string = `${item[key]}`;

    if (value in groupByValues) {
      groupByValues[value].push(item);
    } else {
      groupByValues[value] = [item];
    }
  });

  return groupByValues;
}
