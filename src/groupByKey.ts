type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const answer: GroupsMap<T> = {};

  items.forEach((element) => {
    const newKey: string = `${element[key]}`;

    if (!(newKey in answer)) {
      answer[newKey] = [];
    }

    if (newKey in answer) {
      answer[newKey].push(element);
    }
  });

  return answer;
}
