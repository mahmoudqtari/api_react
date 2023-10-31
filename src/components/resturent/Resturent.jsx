import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';

function Resturent() {
  
  let [lists, setLists] = useState([]);
  const getLists = async (item) => {
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${item}`);
    let data = (await response.json()).recipes;
    setLists(data);

  }  

  return (
    <>
    <div className='buttons d-flex justify-content-center'>
    <Button onClick={()=> getLists('pizza')} variant="primary" className="text-center my-2 me-2">pizza</Button>
    <Button onClick={()=> getLists('onion')} variant="primary" className="text-center my-2 me-2">onion</Button>
    <Button onClick={()=> getLists('potato')} variant="primary" className="text-center my-2">potato</Button>
    </div>
    <div className='row p-0 m-0'>
      {lists.map((ele) => {
        return (

          <div className='col-md-4' key={ele.recipe_id}>
            <Card className='h-75'>
              <div className='img w-100 h-50'>
                <Card.Img className="w-100 h-100" variant="top" src={ele.image_url} />
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
    </>
  )
}

export default Resturent