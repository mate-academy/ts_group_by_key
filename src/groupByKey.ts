type GroupsMap<T> = {
  [key: string]: T[];
};

type Value = string | number;

export function groupByKey<T>(items: Array<T>, key: string): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value: Value = <Value>item[key as keyof T];

    if (!groups[value]) {
      groups[value] = [];
    }

    groups[value].push(item);
  });

  return groups;
}
