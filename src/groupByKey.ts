type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T, K extends keyof T>(items: T[],
  key: K): GroupsMap<T> {
  const groupsMap: GroupsMap<T> = items.reduce((mapa, item) => {
    const keyValue: string = item[key] as string;
    const result = { ...mapa };

    if (!result[keyValue]) {
      result[keyValue] = [];
    }

    result[keyValue].push(item);

    return result;
  }, {} as GroupsMap<T>);

  return groupsMap;
}
