import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Products() {
    let [products, setProducts] = useState([]);
    const getProducts = async () => {
        let response = await fetch("https://fakestoreapi.com/products");
        let data = await response.json();
        setProducts(data);
    }
    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div className='row p-0 m-0'>
            {products.map((ele) => {
                return (

                    <div className='col-md-4' key={ele.id}>
                        <Card className='h-75'>
                            <div className='img w-100 h-50'>
                                <Card.Img className="w-100 h-100" variant="top" src={ele.image}/>
                            </div>
                            <Card.Body className='d-flex align-items-end justify-content-center'>
                                <div className='details'>
                                    <Card.Title className="text-center">{ele.title}</Card.Title>
                                    <div className='button d-flex justify-content-center'>
                                        <Button variant="primary" className="text-center">Go somewhere</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })}
        </div>
    )
}

export default Products