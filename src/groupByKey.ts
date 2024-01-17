type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  return items.reduce((groupedItems: GroupsMap<R>, item: R) => {
    const itemOnIteration = item[key] as string;

    return {
      ...groupedItems,
      [itemOnIteration]: [...(groupedItems[itemOnIteration] || []), item],
    };
  }, {});
}
