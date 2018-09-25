const getNewJediId = (jediList) => {
  return jediList.length === 0 ? 1 : jediList[jediList.length-1].id + 1
};
export { getNewJediId }
