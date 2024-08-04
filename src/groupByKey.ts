type GroupsMap<T> = {
  [key: string]: T[];
};

interface Mapable {
  [key: string]: string | number;
}

export function groupByKey<T extends Mapable>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const newKey = item[key];

    if (!(newKey in result)) {
      result[newKey] = [];
    }

    result[newKey].push(item);
  });

  return result;
}
