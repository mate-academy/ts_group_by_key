/**
 * GroupsMap<T> = { ... }
 *   Criando um tipo genério para objetos ===
 *   Não tem uma formatação exata de quais são as propriedades que terá
 *
 * [key: string]
 *    Está definindo que aceita apenas strings como nome das chaves/propriedades
 *
 * : T[]
 *    Definindo que o que cada chave guarda é uma lista genérica
 */
type GroupsMap<T> = {
  [key: string]: T[];
};

/**
 * items é a entrada. É uma lista de objetos (genéricos; do "tipo" T)
 *
 * K é o "tipo" da chave.
 * Fazer extends keyof T, vai funcionar como uma restrição
 * O TS irá impedir que se tente agrupar por uma chave que não exista (no tipo
 * genérico T)
 *
 * E a função irá retornar um objeto genérico GroupsMap
 * Onde os VALORES da chave passada como argumento (key, uma chave existente
 * nos obj de items) viram chaves no GroupsMap retornado
 */
export function groupByKey<T, K extends keyof T>(
  items: T[],
  key: K,
): GroupsMap<T> {
  const groups: GroupsMap<T> = {};

  for (const item of items) {
    // Pega o valor da propriedade e convertendo em string para usar como
    // chave do objeto GroupsMap

    // Ex.: se items é uma lista de objetos no formato
    //    { id: 1, color: 'red', country: 'Ukraine' }
    // E key === color, 'red' irá virar uma chave no GroupsMap retornado

    const groupValue = String(item[key]);

    // Se o grupo ainda não existir, inicia um array vazio
    if (!groups[groupValue]) {
      groups[groupValue] = [];
    }

    // Adiciona o item ao seu respectivo grupo
    groups[groupValue].push(item);
  }

  return groups;
}

/**
 * Ex
 * items = [
    { id: 1, color: 'red', country: 'Ukraine' },
    { id: 1, color: 'red', country: 'Italy' },
    { id: 1, color: 'green', country: 'Ukraine' },
   ]

 * GroupsMap = {
    'red': [
      { id: 1, color: 'red', country: 'Ukraine' },
      { id: 1, color: 'red', country: 'Italy' },
    ],
    'green': [
      { id: 1, color: 'green', country: 'Ukraine' },
    ],
   }
 */
