import { createSlice } from "@reduxjs/toolkit";
import { UserList } from "../../UserData";
//Here we are creating a slice of the store for storing functionalities realated to Users
const userSlice = createSlice({
  name: "users",
  initialState: UserList,
  // It had reducers properties which has micro reducer functions
  reducers: {
    addUser(state, action) {
      console.log("add", action);
      state.push(action.payload);
    },
    removeUsers(state, action) {
      console.log("remove", action);
      //destructuring
      const { id } = action.payload;
      //find the user whose id matches with id we want to remove
      const deletedUser = state.find((user) => user.id === id);
      if (deletedUser) {
        return state.filter((f) => f.id !== id);
      }
    },
  },
});
export const { addUser, removeUsers } = userSlice.actions;

export default userSlice.reducer;
