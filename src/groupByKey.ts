type GroupsMap<T> = {
  [key: string]: T[];
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function groupByKey<R>(items: R[], key: keyof R): GroupsMap<R> {
  const result: GroupsMap<R> = {};

  return result;
}
