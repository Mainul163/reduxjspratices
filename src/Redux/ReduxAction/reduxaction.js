export const Data_From_Api = "Data_Add";
export const Delete_Data = "Delete_Data";

// api data store function

export const dataFromApi = (products) => {
  return {
    type: Data_From_Api,
    products,
  };
};

// api data store function end
export const deleteData = (id) => {
  return {
    type: Delete_Data,
    id,
  };
};

// delete data function
