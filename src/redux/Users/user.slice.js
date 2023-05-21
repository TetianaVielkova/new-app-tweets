import { createSlice } from '@reduxjs/toolkit';
import { getUsersThunk } from './users.thunk';
import { usersInitState } from './users.init-state';
import { STATUS } from './../../constants/status.constants';

const usersSlice = createSlice({
    name: 'users',
    initialState: usersInitState,
    extraReducers: builder => {
        builder
        .addCase(getUsersThunk.pending, state => {
            state.status = STATUS.loading;
        })
        .addCase(getUsersThunk.fulfilled, (state, { payload }) => {
            state.status = STATUS.success;
            state.users = payload; 
        })
        .addCase(getUsersThunk.rejected, state => {
            state.status = STATUS.error;
        })
    },
});


export const usersReducer = usersSlice.reducer;