import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { filterPoroductCtegoryThunk, filterProductTittleThunk, getProductThunk } from '../store/slices/product.slice';

const Home = () => {
    const dispatch = useDispatch()
    const newList = useSelector(state => state.product)
    const [categories, setCategories] = useState([])
    const [productsearch, setInputSearch] = useState("")


    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getProductThunk())
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategories(res.data))
    }, [])
    console.log(categories)

    return (
        <div>
            <Row>
                {/*CATEGORIA*/}
                <Col lg={3}>
                    <ListGroup>
                        <ListGroup.Item
                            style={{ cursor: 'pointer' }}
                            onClick={() => dispatch(getProductThunk())}
                            action>
                            Todos</ListGroup.Item>
                        {
                            categories.map(c => (
                                <ListGroup.Item
                                    key={c.id}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => dispatch(filterPoroductCtegoryThunk(c.id))}
                                    action>
                                    {c.name}</ListGroup.Item>
                            ))
                        }
                    </ListGroup>
                </Col>
                <Col lg={9}>
                    <h1>Home</h1>
                    <InputGroup>
                        <Form.Control
                            placeholder="Recipient's username"
                            aria-label="Recipient's username with two button addons"
                            aria-describedby='basic-addon2'
                            value={productsearch}
                            onChange={e => setInputSearch(e.target.value)}
                        />
                        <Button
                            onClick={() => dispatch(filterProductTittleThunk(productsearch))}
                            variant="outline-secondary">
                            Search
                        </Button>
                    </InputGroup>
                    <Row xs={2} md={2} lg={3} className='my-5 g-4'>
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
                                        <Button style={{ display: "flex",position:"absolute",justifyContent:"center", right: "2.5rem", bottom:"1rem", borderRadius: "50%", width: "22px" }} variant="danger">A</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Row>

        </div>
    );
};

export default Home;