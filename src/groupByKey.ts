type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(
  items: object[],
  key: keyof GroupsMap<object>,
): GroupsMap<object> {
  const keys = items.map((item: object) => item[key]);
  const uniqueKeys = [...new Set(keys)];

  return uniqueKeys.reduce((acc, uniqueKey) => {
    const filteredItems = items
      .filter((filteredItem: object) => Object
        .values(filteredItem)
        .includes(uniqueKey));

    if (!acc[uniqueKey]) {
      acc[uniqueKey] = [];
    }

    acc[uniqueKey].push(...filteredItems);

    return acc;
  }, {});
}
