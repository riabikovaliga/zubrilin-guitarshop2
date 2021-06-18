export const adaptToClient = (data) => {
  return {
    id: data.id,
    code: data.code,
    name: data.name,
    type: data.type,
    popularity: data.popularity,
    strings: data.strings,
    price: data.price,
    image: data.image,
  };
};

export const getAdaptedData = (dataArray) =>
  dataArray.map((item) => adaptToClient(item));
