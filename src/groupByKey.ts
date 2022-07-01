type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: any[], key: string): GroupsMap<T> {
  const values: string[] = [];
  const group: GroupsMap<T> = {};

  items.forEach((item) => {
    if (!values.includes(item[key])) {
      values.push(item[key]);
    }
  });

  values.forEach((value) => {
    const mas: Array<T> = [];

    items.forEach((item) => {
      if (item[key] === value) {
        mas.push(item);
      }
    });
    group[value] = mas;
  });

  return group;
}
