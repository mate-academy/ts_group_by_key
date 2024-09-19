type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const mainObj: GroupsMap<T> = {};

  for (let i: number = 0; i < items.length; i++) {
    const parameter = items[i][key];

    if (typeof parameter === 'string' || typeof parameter === 'number') {
      const keySort = parameter.toString();

      mainObj[keySort] ||= [];

      mainObj[keySort].push(items[i]);
    } else {
      throw new Error('The value of items[key] should be a string or number');
    }
  }

  return mainObj;
}
