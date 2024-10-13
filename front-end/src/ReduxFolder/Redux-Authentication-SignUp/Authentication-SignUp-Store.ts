import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenticationInterface {
    userName: string | null
    email: string | null
    password: number | null
    loading:boolean
}

const InitialState: AuthenticationInterface = {
    userName:null,
    email: null,
    password: null,
    loading: false,
};

const AuthenticationSignUpStore = createSlice({
    name: 'AuthenticationSignup',
    initialState: InitialState,
    reducers: {
        DeleteAccount(state){
            state.userName = null
            state.email = null
            state.password = null
        },
        SignUp(state,action:PayloadAction<any>){
            state.userName = action.payload.userName
            state.email = action.payload.email
            state.password = action.payload.password
        },
        loading(state){
            state.loading = true
        }
        
    }
})

export const { SignUp, DeleteAccount, loading } = AuthenticationSignUpStore.actions;
export default AuthenticationSignUpStore.reducer;