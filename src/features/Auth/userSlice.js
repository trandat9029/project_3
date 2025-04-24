import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "api/userApi";
import StorageKeys from "./../../constants/storage-keys";

export const register = createAsyncThunk('user/register', async (payload) => {
    const data = await userApi.register(payload); 

    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  
    return data.user;
});

export const login = createAsyncThunk('user/login', async (payload) => {
    const data = await userApi.login(payload); 

    localStorage.setItem(StorageKeys.TOKEN, data.jwt);
    localStorage.setItem(StorageKeys.USER, JSON.stringify(data.user));
  
    return data.user;
});
  

const userSlice = createSlice({
    name : 'user',
    initialState: {
        current : JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
        setting: {},

    },
    reducers: {
        // fake state
        setUser(state, action) {
            state.current = action.payload;
        },
        logout(state){
            //clear local storage
            localStorage.removeItem(StorageKeys.TOKEN);
            localStorage.removeItem(StorageKeys.USER);
            state.current = {}; 
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(register.fulfilled, (state, action) =>{
            state.current = action.payload
        });

        builder.addCase(login.fulfilled, (state, action) =>{
            state.current = action.payload
        });
    },
});

const {actions, reducer} = userSlice;
export default reducer; 
export const { logout} = actions;
export const { setUser } = userSlice.actions;