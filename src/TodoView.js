import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './TodoView.css';

const baseurl = 'http://127.0.0.1:8000/'

function TodoView() {

    const [first, setfirst] = useState([])
    useEffect(() => {
      fetch(baseurl+'view')
      .then(response=>response.json())
      .then(data=>setfirst(data))
      .catch(err=>console.log(err))


    }, [])
    console.log(first)

    const deleteData = async(id)=>{
        await fetch(`${baseurl}/delete_att/${id}`,{
            method:"DELETE",
        })
        setfirst(first.filter(_list=>_list.id !==id))
    }
    

  return (
    <div className='table'>
        <Container>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>SI NO</th>
                    <th>NAME</th>
                    <th>ADDRESS</th>
                    <th>PRIORITY</th>
                    <th>DATE</th>
                    <th>UPDATE</th>
                    <th>DELETE</th>
                </tr>
            </thead>

            <tbody>
                {first.map((list,index)=>(
                    <tr>
                        <td key={index}>{index+1}</td>
                        <td>{list.name}</td>
                        <td>{list.address}</td>
                        <td>{list.priority}</td>
                        <td>{list.date}</td>
                        
                        <td>
                            <Link className='btn btn-primary update' to={`/update/${list.id}`} >Update</Link> 
                        </td>

                        <td>
                            <AiFillDelete className='dltbtn' onClick={()=>deleteData(list.id)} />
                        </td>
                    </tr>

                ))}
            </tbody>
        </Table>
        </Container>

    </div>
  )
}

export default TodoView