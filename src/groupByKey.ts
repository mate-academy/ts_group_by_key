type GroupsMap<T> = {
  [key: string]: Array<T>;
};

export function groupByKey<T>(
  items: Array<T>,
  key: keyof T,
): GroupsMap<T> | T {
  const answer: GroupsMap<T> | T = {};

  if (items.length === 0) {
    return answer;
  }

  items.forEach((elem) => {
    const keyValue = String(elem[key]);

    if (!answer[keyValue]) {
      answer[keyValue] = [];
    }

    answer[keyValue].push(elem);
  });

  return answer;
}
