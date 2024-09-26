// import { type } from "os";

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  return items.reduce((acc, obj) => {
    const property = String(obj[key]);

    if (!acc[property]) {
      acc[property] = [];
    }

    acc[property].push(obj);

    return acc;
  }, result);
}
