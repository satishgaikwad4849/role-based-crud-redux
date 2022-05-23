const initialState = {
    items: [
      {
        id: 1,
        name: "ITEM-65",
        quantity: "34",
      }, 
       {
        id: 2,
        name: "ITEM-34",
        quantity: "100"
      },
      {
        id: 3,
        name: "ITEM-44",
        quantity: "90"
      },
      {
        id: 4,
        name: "ITEM-55",
        quantity: "85"
      },
      {
        id: 5,
        name: "ITEM-67",
        quantity: "65"
      }
    ],
    users:[
      {
        name: "John",
        password:"john@123",
        role: "user"
      }, 
       {
        name: "James",
        password:"james@123",
        role: "admin"
      },
      {
        name: "Robert",
        password:"robert@123",
        role: "user"
      },
      {
        name: "Michael",
        password:"michael@123",
        role: "admin"
      },
      {
        name: "William",
        password:"william@123",
        role: "user"
      }
    ]
  };
  
   const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_ITEMS":
        return {
          ...state,
          items: [...state.items, { id: state.items.length + 1, name: action.payload.name,quantity: action.payload.quantity}],
        };
  
      case "EDIT_ITEMS":
        const updatedItem = action.payload;
          console.log(updatedItem,"updated")
        const updatedItems = state.items.map((item) => {
          if (item.id === updatedItem.id) {
            return updatedItem;
          }
          return item;
        });
  
        return {
          ...state,
          items: updatedItems,
        };
  
      case "REMOVE_ITEMS":
        return {
          ...state,
          items: state.items.filter(
            (item) => item.id !== action.payload.id
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default itemReducer;