// import { isTemplateSpan } from "typescript";

type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  items.forEach((item) => {
    const keys = `${item[key]}`;

    if (!result[keys]) {
      result[keys] = [];
    }

    result[keys].push(item);
  });

  return result;
}
