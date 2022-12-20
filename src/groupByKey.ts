type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: string[],
  key:string):GroupsMap<T> {
  const groupedItems:GroupsMap<T> = items.reduce((curr, item) => {
    const index = key;
    const group = curr;

    group[item[index]] = group[item[index]] || [];

    (group[item[index]]).push(item);

    return group;
  }, {});

  return groupedItems;
}
