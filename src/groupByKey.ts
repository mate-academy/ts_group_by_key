// import { log } from "console";

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T extends object>(items: T[], key: keyof T): GroupsMap<T> {
  const keys: string[] = [];
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i++) {
    const value = String(items[i][key]);

    if (!keys.includes(value)) {
      keys.push(value);
    }
  }

  for (let i = 0; i < keys.length; i++) {
    const group = keys[i];

    for (let y = 0; y < items.length; y++) {
      const itemValue = String(items[y][key]);

      if (itemValue === group) {
        if (group in result) {
          result[group].push(items[y]);
        } else {
          result[group] = [items[y]];
        }
      }
    }
  }

  return result;
}
