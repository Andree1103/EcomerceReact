import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { carGetThunk, purcharseCardThunk } from '../store/slices/car.slice';
import ProductCar from './ProductCar';

const PurcharseSidebar = ({show,handleClose}) => {
    const setcar = useSelector(state => state.car)
    const dispatch = useDispatch()
    useEffect (()=> {
      dispatch(carGetThunk())
    }, [])
    console.log(setcar)
    return (
        <Offcanvas show={show} onHide={handleClose} placement='end' name='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <Button onClick={() => dispatch(purcharseCardThunk())}>Purcharse</Button>
            {setcar.map(car=>(
              <ProductCar car={car} handleClose={handleClose} key={car.id}/>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default PurcharseSidebar;