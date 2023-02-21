type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T) : GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const keyObj: string = String(item[key]);

    if (!newObj[keyObj]) {
      newObj[keyObj] = [];
    }

    newObj[keyObj].push(item);
  });

  return newObj;
}
