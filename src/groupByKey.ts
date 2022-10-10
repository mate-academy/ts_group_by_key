type GroupsMap<T> = {
  [key: string]: T[];
};

type Prop = 'string' | 'number';

export function groupByKey<T>(items: T[], key: string): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (let i = 0; i < items.length; i += 1) {
    const obj: T = items[i];
    const keyObj = obj[key] as Prop;

    if (!result[keyObj]) {
      result[keyObj] = items.filter((item) => item[key] === keyObj);
    }
  }

  return result;
}
