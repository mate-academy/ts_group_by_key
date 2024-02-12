type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const data = items.reduce((acc, currentObject) => {
    const k = currentObject[key].toString();
    const dataSave = { ...acc };

    if (!dataSave[k]) {
      dataSave[k] = [];
    }

    dataSave[k].push(currentObject);

    return dataSave;
  }, {});

  return data;
}
