import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const purcharseSlice = createSlice({
    name: 'purcharse',
    initialState: [],
    reducers: {
        setPurcharse: (state, action) => {
            const purcharse = action.payload
            return purcharse
        }

    }
})

export const getPurcharseThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/purchases',getConfig())
        .then(res => dispatch(setPurcharse(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const { setPurcharse } = purcharseSlice.actions;

export default purcharseSlice.reducer;
