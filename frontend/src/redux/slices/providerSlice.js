import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    providers: [],
    loading: false,
    error: null,
};

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        fetchProvidersStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchProvidersSuccess(state, action) {
            state.loading = false;
            state.providers = action.payload;
        },
        fetchProvidersFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        addProvider(state, action) {
            state.providers.push(action.payload);
        },
        removeProvider(state, action) {
            state.providers = state.providers.filter(provider => provider.id !== action.payload);
        },
    },
});

export const {
    fetchProvidersStart,
    fetchProvidersSuccess,
    fetchProvidersFailure,
    addProvider,
    removeProvider,
} = providerSlice.actions;

export default providerSlice.reducer;