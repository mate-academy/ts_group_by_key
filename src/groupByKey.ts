type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<I>(items: I[], key: keyof I): GroupsMap<I> {
  const groups: GroupsMap<I> = {};

  items.forEach((item) => {
    if (!Object.prototype.hasOwnProperty.call(groups, `${item[key]}`)) {
      groups[`${item[key]}`] = [];
    }

    groups[`${item[key]}`].push(item);
  });

  return groups;
}
