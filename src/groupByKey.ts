type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  const uniqValues: string[] = [];
  const result: GroupsMap<T> = {};

  /* eslint-disable-next-line */
  for (const obj of items) {
    const keyValue = obj[key] as unknown as string;

    if (!uniqValues.includes(keyValue)) {
      uniqValues.push(keyValue);
    }
  }

  /* eslint-disable-next-line */
  for (const key1 of uniqValues) {
    result[key1] = items.filter((obj) => obj[key] === key1);
  }

  return result;
}
