type GroupsMap<T> = {
  [key: string]: T[];
};

type Prop = 'string';

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const obj: T = items[i];
    const keyNameOfResult = obj[key] as Prop;

    if (!result[keyNameOfResult]) {
      result[keyNameOfResult] = items.filter(
        (item) => item[key] === keyNameOfResult,
      );
    }
  }

  return result;
}
