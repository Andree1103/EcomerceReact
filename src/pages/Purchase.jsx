import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPurcharseThunk } from '../store/slices/purcharse.slice';

const Purchase = () => {
    const purcharse = useSelector(state => state.purcharse)
    const dispatch = useDispatch()
    useEffect(()=> {
        dispatch(getPurcharseThunk())
    }, [])
    console.log(purcharse)
    return (
        <div>
            <h1>Purchase</h1>
        </div>
    );
};

export default Purchase;