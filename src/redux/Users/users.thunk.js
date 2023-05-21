import { createAsyncThunk } from '@reduxjs/toolkit';
import { usersApi } from './../../servises/UsersApi';

export const getUsersThunk = createAsyncThunk('users', async (page = 1, thunkAPI) => {
    const { data } = await usersApi.get('/users', {
        params: {
            page,
            limit: 3,
        },
});
    return data;
});
