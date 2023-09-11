type GroupsMap<T> = {
  [key: string]: T[];
};

// eslint-disable-next-line max-len
export function groupByKey<T, K extends keyof T>(items: T[], key: K): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item) => {
    const keyValue = item[key] as string;

    if (!groups[keyValue]) {
      groups[keyValue] = [];
    }

    groups[keyValue].push(item);
  });

  return groups;
}
