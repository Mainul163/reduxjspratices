export const Data_Add = "Data_Add";
export const Api_Add = "Api_Add";

export const dataAdd = (products) => {
  return {
    type: Data_Add,
    products,
  };
};
