type GroupsMap<T> = {
  [key: string]: T[];
};

export
function groupByKey(items: object[], key: keyof object): object {
  const callback = (prev: object, user: object): GroupsMap<object> => {
    return {
      ...prev,
      [user[key]]: items.filter((x) => x[key] === user[key]),
    };
  };

  const obj = items.reduce(callback, {});

  return obj;
}
