import { createSlice } from "@reduxjs/toolkit";
import { ROLES } from "../../constants/auth";

type UserState = {
  user: { 
    [key: string]: string | number | boolean;
    role: `${ROLES}`
  };
}

interface GetUsersSuccessPayload {
  payload: UserState['user'];
}

const userSlice = createSlice({
  name: 'users',
  initialState: {
    user: {},
  } as UserState,
  reducers: {
    setUserData: (state: UserState, { payload }: GetUsersSuccessPayload) => {
      state.user = payload;
    },
  },
});

export const {  setUserData } = userSlice.actions;
export default userSlice.reducer;
