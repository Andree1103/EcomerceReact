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
    let total = 0
    setcar.forEach(p => {
      total += p.product.price * p.quantity
    });
    return (
        <Offcanvas show={show} onHide={handleClose} placement='end' name='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {setcar.map(car=>(
              <ProductCar car={car} handleClose={handleClose} key={car.id}/>
            ))}
          </ul>
        </Offcanvas.Body>
        <div className='check'>
            <div className='total_check'>
              <span className='label_check'>Total:</span>
              <b style={{fontSize:'1.3rem'}}>$ {total}</b>
            </div>
          <button className='btn_check' onClick={() => dispatch(purcharseCardThunk())}>Purcharse</button>
          </div>
      </Offcanvas>
    );
};

export default PurcharseSidebar;