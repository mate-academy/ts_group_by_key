type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const resultObj: GroupsMap<T> = {};
  const keysArray = items.map((item: T) => item[key]);

  keysArray.forEach((keyOfKeys) => {
    if (!resultObj[keyOfKeys]) {
      resultObj[keyOfKeys] = items.filter((value) => value[key] === keyOfKeys);
    }
  });

  return resultObj;
}
