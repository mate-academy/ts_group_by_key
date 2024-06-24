type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupedData: GroupsMap<T> = {};
  const allKeysValues: Array<string> = [];

  for (const item of items) {
    const value = `${item[key]}`;

    if (!allKeysValues.includes(value)) {
      allKeysValues.push(value);
    }
  }

  for (const value of allKeysValues) {
    groupedData[value] = items.filter((el) => `${el[key]}` === value);
  }

  return groupedData;
}
