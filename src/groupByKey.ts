type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  return items.reduce((prevVal, item) => {
    const keyValue = item[key] as string;

    return {
      ...prevVal,
      [keyValue]: [...(prevVal[keyValue] || []), item],
    };
  }, {} as GroupsMap<T>);
}
