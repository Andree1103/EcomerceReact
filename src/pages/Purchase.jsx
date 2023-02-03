import React, { useEffect } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPurcharseThunk } from '../store/slices/purcharse.slice';

const Purchase = () => {
    const purcharse = useSelector(state => state.purcharse)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPurcharseThunk())
    }, [])
    return (
        <div>
            <h1>Purchase</h1>
                <Row xs={1} md={2} lg={3} xl={4}className="g-5 m-3">
                    {purcharse.map(e => (
                        <Col key={e.id}>
                            <Link to={`/products/${e.product.id}`} style={{textDecoration:'none'}}>
                                <Card style={{ width: '100%', height: "350px", maxWidth:'250px',minWidth:'250px', margin:'0 auto'}}>
                                    <Card.Img variant="top" src={e.product.images[0].url} style={{ width: '100%', height: "150px", objectFit: "contain", padding: "1rem" }} alt="" />
                                    <Card.Body>
                                        <Card.Title variant='dark'>{e.product.title}</Card.Title>
                                        <Card.Text style={{textAlign:'left'}}>
                                            <span>Price: ${e.product.price}</span> <br />
                                            <span>Cant: <b>{e.quantity}</b></span> <br />
                                            <span>Total : ${e.product?.price * e.quantity}</span>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ))}
                </Row>
        </div>
    );
};

export default Purchase;