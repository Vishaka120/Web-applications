import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserSlices";
//We need to create a store from where we will get the data or store the data

const store = configureStore({
  //Root reducer where we can access many reducers
  reducer: {
    //access the reducers from the userSlice
    //When we click Add User
    //Flow: store ---> check for reducer---> userSlice --->reducer--->addUser reducer action
    users: userSlice,
  },
});
export default store;
