import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id}  = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Hye-RiYu/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect( () => {
    getProductDetail();
  });

  return (
    <Container>
      <Row>
        <Col className='productdetail-img' lg={7}>
          <img src={product?.img} alt={product?.title}/>
        </Col>
        <Col lg={5}>
          <div className='productdetail-title'>{product?.title}</div>
          <div className='productdetail-price'>₩ {product?.price}</div>
          <span className='productdetail-choice'>{product?.choice === true ? "Conscious choice" : ""}</span>
          <Dropdown>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">S</Dropdown.Item>
              <Dropdown.Item href="#/action-2">M</Dropdown.Item>
              <Dropdown.Item href="#/action-3">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className='productdetail-button' variant="dark" size="lg">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
