type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends Record<string, any>>(
  items: T[],
  key: keyof T,
): GroupsMap<T> {
  const massive: string[] = [];

  for (const obj of items) {
    massive.push(String(obj[key]));
  }

  const newMass = Array.from(new Set(massive));
  const newObj: GroupsMap<T> = {};

  for (const item of newMass) {
    newObj[item] = [];

    for (const obj of items) {
      if (String(obj[key]) === item) {
        newObj[item].push(obj);
      }
    }
  }

  return newObj;
}
