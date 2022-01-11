type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<K>(items: K[], key: keyof K): GroupsMap<K> {
  const grouped: GroupsMap<K> = {};

  items.forEach((item) => {
    const newKey = `${item[key]}`;

    if (!grouped[newKey]) {
      grouped[newKey] = [];
    }

    grouped[newKey].push(item);
  });

  return grouped;
}
