import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '80px',
  padding: '0px',
  margin: '0px 10px 100px 0px',
  background: 'black',
  textDecoration: 'none',
  color: 'yellow',
  position: 'relative', 
  top: '10px',
  align:'center',
  font: '18px'
}


const Navbar = () => {
  return(
  <div className="navbar">
    <NavLink
      to="/posts/new"
      exact
      style={link}
      activeStyle={{
        background: "yellow",
        color: 'black'
      }}
      >New Post</NavLink>
    <NavLink
      to="/posts"
      exact
      style={link}
      activeStyle={{
        background: "yellow",
        color: 'black'
      }}
      >Board</NavLink>
    <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: "yellow",
        color: 'black'
      }}
      >Home</NavLink>
    </div>
    )
}
export default Navbar;
