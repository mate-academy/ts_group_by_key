type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const organised: GroupsMap<T> = {};

  items.forEach((item) => {
    const val = item[key] as string;

    if (!(val in organised)) {
      organised[val] = [];
    }
    organised[val].push(item);
  });

  return organised;
}
