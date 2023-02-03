import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Product from '../components/Product';
import { addCarThunk } from '../store/slices/car.slice';
import { filterPoroductCtegoryThunk, filterProductTittleThunk, getProductThunk } from '../store/slices/product.slice';

const Home = () => {
    const dispatch = useDispatch()
    const newList = useSelector(state => state.product)
    const [categories, setCategories] = useState([])
    const [productsearch, setInputSearch] = useState("")
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getProductThunk())
        axios.get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then(res => setCategories(res.data))
    }, [])

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
                                <Product p={p}/>
                            </Col>
                        ))}
                    </Row>
                </Col>

            </Row>

        </div>
    );
};

export default Home;