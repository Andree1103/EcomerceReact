import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addCarThunk } from '../store/slices/car.slice';
import { filterPoroductCtegoryThunk } from '../store/slices/product.slice';

const ProductDetail = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [input, setInput] = useState(1)
    const [products, setProducs] = useState({})
    const newList = useSelector(state => state.product)
    useEffect(() => {
        axios.get(`https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`)
            .then(res => {
                setProducs(res.data)
                dispatch(filterPoroductCtegoryThunk(res.data.category.id))
            })
    }, [id])
    console.log(products)

    const btnadd = () => {
        setInput(input + 1)
    }
    const restarUno = () => {
        setInput(input - 1)
    }
    const addcard = (id) => {
        const purchase = {
            quantity: input,
            productId: products.id
        }
        dispatch(addCarThunk(purchase))
    }

    return (
        <div>
            <h1>Product Detail</h1>
            <Row>
                <Col lg={8}>
                    <Carousel fade variant='dark'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={products.images?.[0].url}
                                alt="First slide"
                                style={{ width: '200px', height: '500px', objectFit: "scale-down" }}
                            />
                            <Carousel.Caption bsPrefix className='aaaa'>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={products.images?.[1].url}
                                alt="Second slide"
                                style={{ width: '200px', height: '500px', objectFit: "scale-down" }}
                            />

                            <Carousel.Caption bsPrefix className='aaaa'>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={products.images?.[2].url}
                                alt="Third slide"
                                style={{ width: '200px', height: '500px', objectFit: "scale-down" }}
                            />

                            <Carousel.Caption bsPrefix className='aaaa'>

                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col lg={4}>
                    <h1>{products.title}</h1>
                    <p>{products.description}</p>
                    <div className='info_pro'>
                    <div className='price'>
                        <span className='label_pre'>Precio</span>
                        <span className='amount'>$ {products.price}</span>
                    </div>
                    <div className='quantity-box'>
                        <div className='cant_box'>Cantidad</div>
                    <div className='btns'>
                        <button type="button" onClick={btnadd}><i className='bx bx-plus' ></i></button>
                        <div className='value' onChange={e => setInput(e.target.value)}>{input}</div>
                        <button type="button" onClick={restarUno}><i className='bx bx-minus'></i></button>
                    </div>
                    </div>
                    </div>
                    
                    <Button variant="danger" size="mg" style={{ width: '100%', margin: '5px' }}
                        onClick={addcard}
                    >Add to Car</Button>
                </Col>

            </Row>
            <div className='similar_items'>
            <h1>Similar Items</h1>
            </div>
            <Row xs={2} md={3} lg={4} className='my-3 g-4'>
                {newList.map(p => (
                    <Col key={p.id}>
                        <Card onClick={() => navigate(`/products/${p.id}`)} style={{ width: '100%', height: "350px" }}>
                            <Card.Img variant="top" src={p.images[0].url} style={{ width: '100%', height: "150px", objectFit: "contain", padding: "1rem" }} alt="" />
                            <Card.Body>
                                <Card.Title variant='dark'>{p.title}</Card.Title>
                                <Card.Text>
                                    <span>Price</span> <br />
                                    ${p.price}
                                </Card.Text>
                                <Button style={{ display: "flex", position: "absolute", justifyContent: "center", right: "1rem", bottom: "1rem", borderRadius: "50%", width: "22px" }} variant="danger">A</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default ProductDetail;