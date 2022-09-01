import { createAction, createReducer, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

export const region = createAction("SET_REGION")

export const paises = createAsyncThunk("Paises", () => {
    return axios.get(`https://restcountries.com/v3.1/all`)
        .then(res =>res.data)
        // .then(movies => !movies ? [] : movies)
        .catch(err => console.log({ err }))
})

const regionesReducer = createReducer([], {
    [region]: (state, action) => action.payload,
    [paises.fulfilled]: (state, action) => action.payload
})

export default regionesReducer