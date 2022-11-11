type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: string): GroupsMap<object> {
  return items.reduce((hash, obj) => {
    if (obj[key] === undefined) {
      return hash;
    }

    return Object.assign(hash, { [obj[key]]: (hash[obj[key]]
      || []).concat(obj) });
  }, {});
}
