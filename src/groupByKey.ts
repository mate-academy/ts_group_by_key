type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const newObj: GroupsMap<T> = {};

  items.forEach((el: T) => {
    const keyObj: string = String(el[key]);

    if (!newObj[keyObj]) {
      newObj[keyObj] = [];
    }
    newObj[keyObj].push(el);
  });

  return newObj;
}
