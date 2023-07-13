import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPaises = createAsyncThunk(
  "regiones/fetchPaises",
  async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      return response.data;
    } catch (error) {
      console.log("Error fetching paises:", error);
      throw error;
    }
  }
);

export const fetchProvincias = createAsyncThunk(
  "regiones/fetchProvincias",
  async () => {
    try {
      const response = await axios.get(
        "https://apis.datos.gob.ar/georef/api/provincias"
      );
      return response.data.provincias;
    } catch (error) {
      console.log("Error fetching provincias:", error);
      throw error;
    }
  }
);

export const fetchLocalidades = createAsyncThunk(
  "regiones/fetchLocalidades",
  async (provincia) => {
    try {
      const response = await axios.get(
        `https://apis.datos.gob.ar/georef/api/departamentos?provincia=${provincia}&max=1000`
      );
      return response.data.departamentos;
    } catch (error) {
      console.log("Error fetching localidades:", error);
      throw error;
    }
  }
);

const regionesSlice = createSlice({
  name: "regiones",
  initialState: {
    paises: [],
    provincias: [],
    localidades: [],
    genero: "Prefiero no decirlo",
  },
  reducers: {
    setGenero: (state, action) => {
      state.genero = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPaises.fulfilled, (state, action) => {
      state.paises = action.payload;
    });
    builder.addCase(fetchProvincias.fulfilled, (state, action) => {
      state.provincias = action.payload;
    });
    builder.addCase(fetchLocalidades.fulfilled, (state, action) => {
      state.localidades = action.payload;
    });
  },
});

export const { setGenero } = regionesSlice.actions;

export default regionesSlice.reducer;
