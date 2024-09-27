type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  [...items].forEach((item) => {
    const property = String(item[key]);

    if (!newObj[property]) {
      newObj[property] = [];
    }

    newObj[property].push(item);
  });

  return newObj;
}
