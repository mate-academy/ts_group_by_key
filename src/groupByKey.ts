type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  // write code here;

  const obj: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyObj = item[key] as string;

    if (obj[keyObj] !== undefined && obj[keyObj].length !== 0) {
      obj[keyObj].push(item);
    } else {
      obj[keyObj] = [];
      obj[keyObj].push(item);
    }
  });

  return obj;
}
