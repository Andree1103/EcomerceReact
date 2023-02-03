import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { addCarThunk } from '../store/slices/car.slice';

const Product = ({p}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addcard = () => {
        if (localStorage.getItem("token")) {
            const purchase = {
                quantity: 1,
                productId: p.id
            }
            dispatch(addCarThunk(purchase))
        } else {
            swal({
                title: "No estas Logueado",
                text: "Redirigiendo al login",
                icon: "warning",
                button: "ok"
              })
              .then(() => {
                  navigate("/login");
              });
        }
    }
    return (
        <Card style={{ width: '100%', height: "350px" }}>
            <Card.Img variant="top" src={p.images[0].url} style={{ width: '100%', height: "150px", objectFit: "contain", padding: "1rem" }} alt="" />
            <Link to={`/products/${p.id}`} style={{ textDecoration: 'none' }}>
                <Card.Body>
                    <Card.Title variant='dark'>{p.title}</Card.Title>
                    <Card.Text>
                        <span>Price</span> <br />
                        ${p.price}
                    </Card.Text>
                </Card.Body>
            </Link>
            <Button style={{ display: "flex", position: "absolute", justifyContent: "center", right: "2.5rem", bottom: "1rem", borderRadius: "50%", width: "22px" }} variant="danger" onClick={addcard}>A</Button>
        </Card>
    );
};

export default Product;