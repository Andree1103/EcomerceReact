import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import swal from 'sweetalert';
import getConfig from '../../utils/getConfig';
import { setIsLoading } from './isLoading.slice';

export const carSlice = createSlice({
    name: 'car',
    initialState: [],
    reducers: {
        setCar: (state, action) => {
            const car = action.payload
            return car
        }

    }
})

export const carGetThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/cart', getConfig())
        .then(res => dispatch(setCar(res.data)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addCarThunk = (purchase) => (dispatch) => {
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/cart', purchase, getConfig())
        .then(res => {
            swal({
                title: "Agregado Correctamente",
                text: "Siga Comprando",
                icon: "success",
                button: "ok"
            })
                .then(() => {
                    dispatch(carGetThunk())
                });
        })
        .catch(() => alert("hubo un error"))
}

export const purcharseCardThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/purchases', {}, getConfig())
        .then(res => {
            swal({
                title: "Agregado a Purcharse",
                text: "Siga Comprando",
                icon: "success",
                button: "ok"
            })
                .then(() => {
                    dispatch(carGetThunk())
                });
        })
        .catch(() => alert("hubo un error"))
        .finally(() => dispatch(setIsLoading(false)));
}

export const deleteCarThunk = (id) => (dispatch) => {
    return axios.delete('https://e-commerce-api-v2.academlo.tech/api/v1/cart/' + id, getConfig())
        .then(res => {
            swal({
                title: "Eliminando Carrito",
                text: "Se perdera tu producto!",
                icon: "warning",
                buttons: "ok",
                dangerMode: true,
            })
                .then(() => {
                    dispatch(carGetThunk())
                });
        })
}

export const modiffyQuantityThunk = (id,quantity) => (dispatch) => {
    return axios.put('https://e-commerce-api-v2.academlo.tech/api/v1/cart/'+id,quantity,getConfig())
        .then(() => dispatch(carGetThunk()))
}
export const { setCar } = carSlice.actions;

export default carSlice.reducer;
