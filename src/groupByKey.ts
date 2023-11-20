type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
/*   const keyMap = items.map((each: {}) => [each[key], []]);
  const result = Object.fromEntries(keyMap);

  for (const keyR in result) {
  // ^ lint threw warning for using for in cycle
    result[keyR] = items.filter(item => item[key] === keyR);
  } */

  const result: GroupsMap<T> = {};

  items.forEach((el) => {
    const groupKey = String(el[key]);

    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(el);
  });

  return result;
}
