type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const obj: GroupsMap<T> = {};

  items.forEach((element) => {
    const keyItem = String(element[key]);

    if (!obj[keyItem]) {
      obj[keyItem] = [];
    }

    obj[keyItem].push(element);
  });

  return obj;
}
