import React from 'react'

const Navbar = () => {
  const navs = [
    {label:"Home",value:"Home"},
    {label:"About", value:"About"},
    {label:"Contact", value:"Contact"}
  ]
  return (
    <div className='nav flex-between'>
      <div className='nav'>
      {navs.map((item, ind)=>{
        return(
          <p className='nav-items'>{item.label}</p>
        )
      })}
      </div>
      <div>
        <img src="../../assets/headIcon.png" alt="saghir" />
      </div>
    </div>
  )
}

export default Navbar;
