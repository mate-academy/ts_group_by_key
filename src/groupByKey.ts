type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const groupped: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!groupped[keyValue]) {
      groupped[keyValue] = [];
    }

    groupped[keyValue].push(item);
  });

  return groupped;
}
