type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  return items.reduce((acc, obj) => {
    const group = String(obj[key]);

    if (!acc[group]) {
      acc[group] = [];
    }

    acc[group].push(obj);

    return acc;
  }, {});
}
