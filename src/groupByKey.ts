type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const Objects: GroupsMap<T> = {};

  items.forEach((item: T) => {
    const value = String(item[key]);

    if (!Objects[value]) {
      Objects[value] = [item];
    } else {
      Objects[value].push(item);
    }
  });

  return Objects;
}
