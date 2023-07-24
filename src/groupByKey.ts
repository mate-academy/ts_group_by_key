type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey
<T, K extends keyof T>(items: T[], key: K): GroupsMap<T> {
  const result: GroupsMap<T> = items.reduce((acc, ch) => {
    const keyValue = String(ch[key]);

    if (!acc[keyValue]) {
      acc[keyValue] = [];
    }
    acc[keyValue].push(ch);

    return acc;
  }, {} as GroupsMap<T>);

  return result;
}
