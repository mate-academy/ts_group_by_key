type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<It>(items: It[], key: keyof It): GroupsMap<It> {
  const res: GroupsMap<It> = {};

  for (const i of items) {
    const iKey = i[key];
    const strKey = String(iKey);

    if (!res[strKey]) {
      res[strKey] = [i];
    } else {
      res[strKey].push(i);
    }
  }

  return res;
}
