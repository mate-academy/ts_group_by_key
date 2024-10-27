import { error } from 'console';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> | null {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const name = (item[key] as string) || null;

    if (name) {
      if (result[name]) {
        continue;
      }
      result[name] = items.filter((data) => data[key] === name);
    } else {
      error('check typeof key in T');

      return null;
    }
  }

  return result;
}
