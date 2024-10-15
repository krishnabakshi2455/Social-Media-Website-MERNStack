import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenticationInterface {
    username: string | null
    email: string | null
    password: number | null | string
}
interface SignUpPayload {
    email: string | null;
    password: number | string | null;
    username:string | null

}
const InitialState: AuthenticationInterface = {
    username:null,
    email: null,
    password: null,
};

const AuthenticationSignUpStore = createSlice({
    name: 'AuthenticationSignup',
    initialState: InitialState,
    reducers: {
        DeleteAccount(state){
            state.username = null
            state.email = null
            state.password = null
        },
        SignUp(state, action: PayloadAction<SignUpPayload>){
            state.username = action.payload.username
            state.email = action.payload.email
            state.password = action.payload.password
        },
        
    }
})

export const { SignUp, DeleteAccount } = AuthenticationSignUpStore.actions;
export default AuthenticationSignUpStore.reducer;