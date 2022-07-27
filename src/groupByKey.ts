type GroupsMap = {
  [key: string | number]: object[];
};

export function groupByKey(
  items: GroupsMap [],
  key: keyof object,
): object[] | {} {
  if (items.length === 0) {
    return {};
  }

  const answer: GroupsMap = {};

  items.forEach((elem: GroupsMap) => {
    const keyValue: string = String(elem[key]);

    if (!answer[keyValue]) {
      answer[keyValue] = [];
    }

    answer[keyValue].push(elem);
  });

  return answer;
}
