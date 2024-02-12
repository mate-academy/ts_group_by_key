type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: string): GroupsMap<T> {
  const data = items.reduce((acc, currentObject) => {
    const keyValue = currentObject[key];
    const dataSave = { ...acc };

    if (!dataSave[keyValue]) {
      dataSave[keyValue] = [];
    }
    dataSave[keyValue].push(currentObject);

    return dataSave;
  }, {});

  return data;
}
