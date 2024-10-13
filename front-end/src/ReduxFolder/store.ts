import createSagaMiddleware, { SagaMiddleware } from 'redux-saga'
// import { call, all, AllEffect, CallEffect } from 'redux-saga/effects'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import AuthenticationSignupStore from './Redux-Authentication-SignUp/Authentication-SignUp-Store'
import AuthenticationLoginStore from './Redux-Authentication-LogIn/Authentication-LogIn-Store'

const SagaMiddlewareConst: SagaMiddleware = createSagaMiddleware()

// function* RootSaga(): Generator<AllEffect<CallEffect<void>>> {
//     yield all([
//         // call(CounterSaga),

//     ]);
// }

const store: EnhancedStore = configureStore({
    reducer: {
        AuthenticationSignup: AuthenticationSignupStore,
        AuthenticationLogin: AuthenticationLoginStore,

    },
    devTools: true,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(SagaMiddlewareConst),
})

// SagaMiddlewareConst.run(RootSaga)

export default store;

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch