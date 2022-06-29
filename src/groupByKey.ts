type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;
  const sortValue: GroupsMap<T> = {};

  items.forEach((object) => {
    const property = String(object[key]);

    if (!sortValue[property]) {
      sortValue[property] = [];
    }

    sortValue[property].push(object);
  });

  return sortValue;
}
