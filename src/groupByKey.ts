type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const grouped = items.reduce((acc, currentItem) => {
    const stringOfKey = currentItem[key].toString();
    const groupedData = { ...acc };

    if (!groupedData[stringOfKey]) {
      groupedData[stringOfKey] = [];
    }

    groupedData[stringOfKey].push(currentItem);

    return groupedData;
  }, {});

  return grouped;
}
