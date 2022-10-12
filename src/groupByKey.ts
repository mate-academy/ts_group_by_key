type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((current) => {
    const nKey = current[key] as keyof GroupsMap<T>;

    if (result[nKey] === undefined) {
      result[nKey] = [current];
    } else {
      result[nKey].push(current);
    }
  });

  return result;
}
