type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  for (const item of items) {
    const itemsCopy: T[] = [...items];

    const arg: any = item[key];

    if (!obj[arg]) {
      obj[arg] = itemsCopy.filter((a: T) => {
        return a[key] === arg;
      });
    }
  }

  return obj;
}
