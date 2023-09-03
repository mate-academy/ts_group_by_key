type GroupsMap<T> = {
  [key: string]: T[];
};

interface Item {
  [key: string]: any;
}

export function groupByKey(items :Item[], key: string)
  :GroupsMap<Item> {
  const groupedByKey = items.reduce((acc :GroupsMap<Item>, current :Item) => {
    const newKey :string = current[key];

    if (acc[newKey]) {
      acc[newKey].push(current);

      return acc;
    }

    acc[newKey] = [];

    acc[newKey].push(current);

    return acc;
  }, {});

  return groupedByKey;
}
