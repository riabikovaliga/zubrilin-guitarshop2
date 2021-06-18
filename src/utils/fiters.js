export const filteringByPrice = (guitars, minPrice, maxPrice) => {
  return guitars.filter(
    (guitar) => guitar.price >= minPrice && guitar.price <= maxPrice
  );
};

export const filteringByTypes = (guitars, types) => {
  return guitars.filter((guitar) => types.includes(guitar.type));
};

export const filteringBySrings = (guitars, strings) => {
  return guitars.filter((guitar) => strings.includes(String(guitar.strings)));
};
