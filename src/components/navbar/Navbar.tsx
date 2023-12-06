import React from 'react'

const Navbar = () => {
  const navs = [
    {label:"Home",value:"Home"},
    {label:"About", value:"About"},
    {label:"Contact", value:"Contact"}
  ]
  return (
    <div className='nav'>
      {navs.map((item, ind)=>{
        return(
          <p className='nav-p'>{item.label}</p>
        )
      })}
    </div>
  )
}

export default Navbar;
