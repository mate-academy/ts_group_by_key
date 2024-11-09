type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach(item =>{
    const keyValue = item[key];
    const keyString = String(keyValue);

    if(!obj[keyString]) {
      obj[keyString] = []
    }

    obj[keyString].push(item);
  });

  return obj;
}
