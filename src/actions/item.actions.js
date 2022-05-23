export const addItem = (item) => {
    return {
      type: "ADD_ITEMS",
      payload: item
    };
  }
  
  export const editItem = (item) => {
    console.log(item,"item action")
    return {
      type: "EDIT_ITEMS",
      payload: item
    };
  }
  
  export const removeItem = (id) => {
    return {
      type: "REMOVE_ITEMS",
      payload: id
    };
  }