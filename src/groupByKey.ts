// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { rmSync } from 'fs';

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  // write code here;

  const result: GroupsMap<T> = {};

  for (const item of items) {
    const value = item[key];

    const valueS = String(value);

    if (!result[valueS]) {
      result[valueS] = [];
      result[valueS].push(item);
    }
  }

  return result;
}
