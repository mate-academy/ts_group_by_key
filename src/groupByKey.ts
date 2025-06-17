type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const groupKey = String(item[key]);

    if (!res[groupKey]) {
      res[groupKey] = [];
      res[groupKey].push(item);
    } else {
      res[groupKey].push(item);
    }
  }

  for (const group in res) {
    res[group].sort((el1, el2): number => {
      const fValue = el1[key];
      const sValue = el2[key];

      if (typeof fValue === 'string' && typeof sValue === 'string') {
        return fValue.localeCompare(sValue);
      } else if (typeof fValue === 'number' && typeof sValue === 'number') {
        return fValue - sValue;
      }

      return 0;
    });
  }

  return res;
}
