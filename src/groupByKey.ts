type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: [], key: keyof T): GroupsMap<T> {
  return items.reduce((prev: GroupsMap<T>, object) => {
    return {
      ...prev,
      [object[key]]: items.filter((item) => item[key] === object[key]),
    };
  }, {});
}
