import React from 'react'
import { Link } from 'react-router-dom'
import '../style/Header.css'

const Header = () => {
  return (
    <div className='header'>
       <Link to="/form1">ROW FORM</Link>
       <Link to='/form2'>REACT FORM</Link>
    </div>
  )
}

export default Header
