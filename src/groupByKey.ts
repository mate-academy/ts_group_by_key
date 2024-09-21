type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<K>(items: K[], key: keyof K): GroupsMap<K> {
  const res: GroupsMap<K> = {};

  for (const obj of items) {
    const keyValue = String(obj[key]);

    if (!res[keyValue]) {
      res[keyValue] = [];
    }
    res[keyValue].push(obj);
  }

  return res;
}
