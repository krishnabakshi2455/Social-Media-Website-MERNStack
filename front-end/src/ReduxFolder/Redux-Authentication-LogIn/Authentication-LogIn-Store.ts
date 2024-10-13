import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenticationInterface {
    email: string | null
    password: number | null
    loading: boolean
}

const InitialState: AuthenticationInterface = {
    email: null,
    password: null,
    loading: false,
};

const AuthenticationLogInStore = createSlice({
    name: 'AuthenticationLogin',
    initialState: InitialState,
    reducers: {
        LogOut(state) {
            state.email = null
            state.password = null
        },
        LogIn(state, action: PayloadAction<any>) {
            state.email = action.payload.email
            state.password = action.payload.password
        },
        loading(state) {
            state.loading = true
        }

    }
})

export const { LogIn, LogOut, loading } = AuthenticationLogInStore.actions;
export default AuthenticationLogInStore.reducer;