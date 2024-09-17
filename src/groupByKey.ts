type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((acc: GroupsMap<T>, obj: T) => {
    const property: string = `${obj[key]}`;

    if (!acc[property]) {
      acc[property] = [];
    }

    acc[property].push(obj);

    return acc;
  }, {});
}
