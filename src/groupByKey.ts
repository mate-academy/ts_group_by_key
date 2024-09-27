type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends { [key: string]: unknown }>(
  items: T[],
  key: string,
): GroupsMap<T> {
  const res: GroupsMap<T> = {};

  for (const item of items) {
    const keyValue = item[key];

    if (!(typeof keyValue === 'string' || typeof keyValue === 'number')) {
      throw new Error(`value for key: ${key} is not a string or number`);
    }

    if (!res.hasOwnProperty(keyValue)) {
      res[keyValue] = [item];
    } else {
      res[keyValue].push(item);
    }
  }

  return res;
}
