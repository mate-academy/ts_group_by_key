type GroupsMap<T> = {
  [key: string]: T[];
};
//                        array   string

export function groupByKey<T>(items: T[], key: keyof T): Record<string, T[]> {
  // write code here;
  /* books = [
  { id: 1, color: 'red', country: 'Ukraine' },
  { id: 1, color: 'red', country: 'Italy' },
  { id: 1, color: 'green', country: 'Ukraine' }]
  */
  const acumulador: GroupsMap<T> = {};

  for (const item of items) {
    //  { id: 1, color: 'red', country: 'Ukraine' }, o loop percorre cada objeto
    const k = String(item[key]); // k = 'color':

    if (!acumulador[k]) {
      // se acumulador não tiver a chave color ele será um objeto vazio
      acumulador[k] = [];
      acumulador[k].push(item);
    } else {
      // acumulador['color'] = color:
      acumulador[k].push(item); // { id: 1, color: 'red', country: 'Ukraine' }
    }
  }

  return acumulador;
}
