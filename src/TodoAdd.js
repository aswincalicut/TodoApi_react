import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Button, Card, Container, Form } from 'react-bootstrap';
import './TodoAdd.css';
import { Link } from 'react-router-dom';

const baseurl = 'http://127.0.0.1:8000/'

function TodoAdd() {

    const [first, setfirst] = useState({
        "name":"",
        "address":"",
        "priority":""
    })

    console.log(first)
    const handlechange = (event)=>{
        setfirst({
            ...first,
            [event.target.name]:event.target.value
        })
    }

    const submitform = (e)=>{
        e.preventDefault()
        const Tododata = new FormData();
        Tododata.append('name',first.name)
        Tododata.append('address',first.address)
        Tododata.append('priority',first.priority)

        try {
            axios.post(baseurl+'add/',first)
            .then((response)=>console.log(response.data))
        }
        catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {
        document.title = 'adddata'
      }, [])
    
  return (
    <div className='crd'>
      
        <Card className='card-body'>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label className='tit-name'>NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter name " onChange={handlechange} name="name" value = {first.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='tit-name'>ADDRESS</Form.Label>
        <Form.Control type="txt" placeholder='Enter address' onChange={handlechange} name = "address" value = {first.address} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label className='tit-name'>PRIORITY</Form.Label>
        <Form.Control type="txt" placeholder='Enter priority high/low' onChange={handlechange} name = "priority" value = {first.priority} />
      </Form.Group>

    <div className='btn_submit'>
      <Link className='btn btn-primary addbtn' onClick={submitform} to={`/view`} type="submit">
        Submit
      </Link>
    </div>
    </Form>
    </Card>
    

    </div>
  )
}

export default TodoAdd