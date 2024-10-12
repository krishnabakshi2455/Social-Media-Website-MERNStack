import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthenticationInterface {
    userName: string | null
    email: string | null
    password: number | null
    loading:boolean
    error:string | null
    // loggedInUserNames:string[]
    // loggedInUserEmails:string[]
    // loggedInUserPasswords:number[]
}

const InitialState: AuthenticationInterface = {
    userName:null,
    email: null,
    password: null,
    loading: false,
    error: null,
};

const AuthenticationSlice = createSlice({
    name: 'Authentication-signup',
    initialState: InitialState,
    reducers: {
        GET_AUTHENTICATIONDATA_REQUEST(state){
            state.loading = true
        },
        GET_AUTHENTICATIONDATA_SUCCESS(state,action:PayloadAction<any>){
            state.loading = false
            state.userName = action.payload.userName
            state.email = action.payload.email
            state.password = action.payload.password
        },
        GET_AUTHENTICATIONDATA_FAILURE(state,action:PayloadAction<any>){
            state.loading = false
            state.error = action.payload.error
        },
    }
})

export const {GET_AUTHENTICATIONDATA_REQUEST, GET_AUTHENTICATIONDATA_SUCCESS, GET_AUTHENTICATIONDATA_FAILURE} = AuthenticationSlice.actions;
export default AuthenticationSlice.reducer;