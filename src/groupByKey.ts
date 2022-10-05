type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const groupped: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!groupped[String(item[key])]) {
      groupped[String(item[key])] = [];
    }

    groupped[String(item[key])].push(item);
  });

  return groupped;
}
