import React from 'react'
import Navbar from '../../Component/Navbar/Nav_Main'
import { CaretRightOutlined, CaretLeftOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom'

export default function Menu_Main() {
  return (
    <>
    <Navbar />
      <div className='Menu-Main w-[90%] mx-auto '>
        

        {/* <div className="woman flex items-center justify-around ">
          <div className="img ">
            <img className=' h-[500px]' src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/about-img.jpg" alt="img-error" />
          </div>

          <div className="para ">
            <NavLink to='/woman-menu'>      <h1 className=' font-extrabold text-4xl text-red-600 '>Woman's Section <span><CaretRightOutlined /></span></h1>
            </NavLink> </div>
        </div>

        <div className="men  flex items-center justify-around  ">

          <div className="para ">
            <NavLink to='/men-menu'>   <h1 className=' font-extrabold text-4xl text-indigo-600 '>Men's Section <span><CaretRightOutlined /></span></h1>
            </NavLink>       </div>
          <div className="img  ">
            <img className='h-[500px]' src="https://websitedemos.net/custom-printing-04/wp-content/uploads/sites/222/2020/02/boy-t2.png" alt="img-error" />
          </div>

        </div>



        <div className="kids flex items-center justify-around  ">
          <div className="img ">
            <img className=' h-[500px]' src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-hero-baby-img.png" alt="img-error" />
          </div>

          <div className="para ">
            <NavLink to='/kids-menu'>      <h1 className=' font-extrabold text-4xl text-yellow-600 '>Kids's Section <span><CaretRightOutlined /></span></h1>
            </NavLink>       </div>

        </div> */}
      </div>
    </>
  )
}
