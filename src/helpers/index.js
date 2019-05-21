export const uid = () =>
  Math.random()
    .toString(32)
    .slice(2, 9);

export const today = () => {
  const date = new Date();

  return [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    .map(part => (part < 10 ? '0' + part : part))
    .join('-');
};
