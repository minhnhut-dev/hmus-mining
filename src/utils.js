export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const generatePrice = () => {
  const rowPrice = Math.random() * 10 + 1;
  const roundedPrice = Math.round(rowPrice * 100) / 100;
  return roundedPrice.toFixed(2);
};
