type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const grouppedData: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyToGroupBy = String(item[key]);

    if (keyToGroupBy in grouppedData) {
      grouppedData[keyToGroupBy].push(item);
    } else {
      grouppedData[keyToGroupBy] = [item];
    }
  });

  return grouppedData;
}
