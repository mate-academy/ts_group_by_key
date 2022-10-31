type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey(items, key) : GroupsMap<object> {
  const itemsCopy = [...items];

  return itemsCopy.reduce((hash, object) => (
    {
      ...hash, [object[key]]: (hash[object[key]] || []).concat(object),
    }
  ), {});
}
