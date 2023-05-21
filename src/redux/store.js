import { configureStore} from '@reduxjs/toolkit';
import { usersReducer } from './Users/user.slice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';



export const store = configureStore({
    devTools: true,
    reducer: {
        users: usersReducer,
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
})
});

export const persistor = persistStore(store);