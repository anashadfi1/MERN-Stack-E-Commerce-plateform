import { ListGroup} from "react-bootstrap";
import Rating from "../components/Rating";
import { Row, Col} from "react-bootstrap";
import {Image} from "react-bootstrap";
import { Card } from "react-bootstrap";
import axios from 'axios'
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {Button} from "react-bootstrap";
const ProductScreen = ()=>{
    
    const [product, setProduct]= useState({})
    const { id: productId } = useParams()
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const { data } = await axios.get(`/api/products/${productId}`);
            setProduct(data)
        }
        fetchProduct()
    },[productId])
    return(
        <>
            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text = {`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col> Status:</Col>
                                    <Col>
                                        <strong>${product.CountInStock>0?'In Stock':'Out of stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button
                                className="btn-block"
                                type='submit'
                                disabled = {product.CountInStock === 0}
                                >
                                    Add to cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default ProductScreen