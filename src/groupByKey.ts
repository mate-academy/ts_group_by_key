type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const grouped: GroupsMap<T> = {};

  for (const item of items) {
    if (!Object.prototype.hasOwnProperty.call(grouped, key)) {
      grouped[item[key]] = [...items].filter((obj) => obj[key] === item[key]);
    }
  }

  return grouped;
}
