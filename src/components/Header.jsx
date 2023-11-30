import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { search } from '../redux/resturantSlice';

function Header() {
  const dispatch =useDispatch()
  return (
    <Navbar variant='dark' className='p-3'>
    <Container>
      <Navbar.Brand href="" className='d-flex'>
        <img
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTitAQJIN7Gw2xLvXh6Z82v3pj_dr0OdGRARIvZ8cMvrDdRDK00IavDTOej5wxb_Im4vM&usqp=CAU"
          width="55"
          height="55"
          className="d-inline-block align-top"
        />{' '}
    <h4 className='mt-3 ms-4'>  <span className='text-warning'> food circle</span> </h4>
      </Navbar.Brand>
      <input onChange={(e)=>dispatch(search(e.target.value))}type="text" placeholder='Enter the neibhourhood ' className='form-control w-25'/>
    </Container>
  </Navbar>
  )
}

export default Header