type GroupsMap = {
  [key: string]: object[];
};

export function groupByKey(
  items: GroupsMap [],
  key: keyof object,
): object[] | {} {
  const answer: GroupsMap = {};

  if (items.length === 0) {
    return answer;
  }

  items.forEach((elem: GroupsMap) => {
    const keyValue: string = String(elem[key]);

    if (!answer[keyValue]) {
      answer[keyValue] = [];
    }

    answer[keyValue].push(elem);
  });

  return answer;
}
