type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: Array<T>, key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, obj: T) => {
    const prop = obj[key] as string;

    if (!acc[prop]) {
      acc[prop] = [];
    }
    acc[prop].push(obj);

    return acc;
  }, {});
}
