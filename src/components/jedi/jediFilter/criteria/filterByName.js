export const filterByName = (filter, jedis) => jedis.filter(jedi =>jedi.name.toUpperCase().includes(filter.search.toUpperCase()));
