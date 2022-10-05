type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupped: GroupsMap<T> = {};

  items.forEach((item) => {
    const grouppedKey = String(item[key]);

    if (!groupped[grouppedKey]) {
      groupped[grouppedKey] = [];
    }

    groupped[grouppedKey].push(item);
  });

  return groupped;
}
