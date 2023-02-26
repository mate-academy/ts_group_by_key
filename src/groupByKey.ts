type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T):GroupsMap<T> {
  const obj: GroupsMap<T> = {};

  items.forEach((element) => {
    const newKey = String(element[key]);

    if (!(newKey in obj)) {
      obj[newKey] = [];
    }

    obj[newKey].push(element);
  });

  return obj;
}
