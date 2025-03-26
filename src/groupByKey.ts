type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const answer: GroupsMap<T> = {};

  for (const el of items) {
    const groupKey = String(el[key]);

    if (!answer[groupKey]) {
      answer[groupKey] = [];
    }
    answer[groupKey].push(el);
  }

  return answer;
}
