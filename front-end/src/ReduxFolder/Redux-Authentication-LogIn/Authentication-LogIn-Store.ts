import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenticationInterface {
    email: string | null
    password: number | string | null
}
interface LogInPayload {
    email: string | null;
    password:  number | string;

}
const InitialState: AuthenticationInterface = {
    email: null,
    password: null,
};

const AuthenticationLogInStore = createSlice({
    name: 'AuthenticationLogin',
    initialState: InitialState,
    reducers: {
        LogOut(state) {
            state.email = null
            state.password = null
        },
        LogIn(state, action: PayloadAction<LogInPayload>) {
            state.email = action.payload.email
            state.password = action.payload.password
        },


    }
})

export const { LogIn, LogOut } = AuthenticationLogInStore.actions;
export default AuthenticationLogInStore.reducer;