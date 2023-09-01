import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const baseurl = 'http://127.0.0.1:8000/'

function TodoUpdate() {
    const {id}=useParams()
    const [first, setfirst] = useState({
        "name":"",
        "address":"",
        "priority":""
    })
    const handlechange = (event)=>{
        setfirst({
            ...first,
            [event.target.name]:event.target.value
        })
    }
    const submitform = (e)=>{
        e.preventDefault()
        const frameworkdata = new FormData();
        frameworkdata.append('name',first.name)
        frameworkdata.append('address',first.address)
        frameworkdata.append('priority',first.priority)
        try {
            axios.put(baseurl+'update_att/'+id+'/',first)
        }
        catch (error){
            console.log("error")
        }
    }
    useEffect(() => {
      document.title = 'updatedata'
    }, [])

    const handleupdate = async (id)=>{
        await fetch('${baseurl}/update_att/'+id,{
            method:"UPDATE",
        })
        setfirst(first.filter(_list=>_list.id !==id))
    }
    
  return (
    <div>
         <Container>
         <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NAME</Form.Label>
        <Form.Control type="text" placeholder="Enter name " onChange={handlechange} name="name" value = {first.name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>ADDRESS</Form.Label>
        <Form.Control type="txt" placeholder='Enter address' onChange={handlechange} name = "address" value = {first.address} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>PRIORITY</Form.Label>
        <Form.Control type="txt" placeholder='Enter priority high/low' onChange={handlechange} name = "priority" value = {first.priority} />
      </Form.Group>

    
      <Button  onClick={submitform} variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>

    </div>
  )
}

export default TodoUpdate