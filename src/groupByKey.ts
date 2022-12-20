type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items: object[], key: string): GroupsMap<object> {
  const grouped: GroupsMap<object> = {};

  items.forEach((item) => {
    const value = item[key as keyof typeof item];

    if (Object.prototype.hasOwnProperty.call(grouped, value) === false) {
      grouped[value] = [item];
    } else {
      grouped[value].push(item);
    }
  });

  return grouped;
}
