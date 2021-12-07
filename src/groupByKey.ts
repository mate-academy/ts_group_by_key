type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  return items.reduce((acc: GroupsMap<T>, currentValue) => {
    acc[String(currentValue[key])]
     = acc[String(currentValue[key])] || [];
    acc[String(currentValue[key])].push(currentValue);

    return acc;
  }, {});
}
