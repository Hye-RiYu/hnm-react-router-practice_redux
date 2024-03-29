import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id}  = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const getProductDetail = async () => {
    setLoading(true);
    let url = `https://my-json-server.typicode.com/Hye-RiYu/hnm-react-router-practice/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setLoading(false);

    setProduct(data);
  };

  useEffect( () => {
    getProductDetail();
  });
  if (loading && product === null) return <h1>Loading</h1>;
  return (
    <Container className="product-detail-card">
      <Row>
        <Col className='product-detail-img' lg={7}>
          <img src={product?.img} alt={product?.title}/>
        </Col>
        <Col lg={5}>
          <div className='product-detail-title'>{product?.title}</div>
          <div className='product-detail-price'>₩ {product?.price}</div>
          <span className='product-detail-choice'>{product?.choice === true ? "Conscious choice" : ""}</span>
          <Dropdown className='drop-down'>
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
          </Dropdown>
          <Button className="add-button" variant="dark" size="lg">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail
