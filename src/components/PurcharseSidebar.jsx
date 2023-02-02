import React, { useEffect } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { carGetThunk } from '../store/slices/car.slice';

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
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            {setcar.map(car=>(
              <li>
              <img src={car.product.images[0].url} alt="" className='img-fluid' />
              <p>{car.product.title}</p>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    );
};

export default PurcharseSidebar;