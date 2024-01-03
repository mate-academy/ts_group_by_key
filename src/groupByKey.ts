type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<C>(items: C[], key: keyof C): GroupsMap<C> {
  // const initial: C = {};

  return items.reduce((acc, currentObj) => {
    const value = currentObj[key] as string;

    if (!acc[value]) {
      acc[value] = [];
    }

    acc[value].push(currentObj);

    return acc;
  }, {} as GroupsMap<C>);
}
