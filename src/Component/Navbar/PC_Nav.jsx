import React, { useState } from 'react'
import { SearchOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';
import '../../Styles/NavBar.css'
import { Dropdown, Space } from 'antd';
import { NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { Button, Drawer } from 'antd';

import Headphone1 from '../../Assets/products/headphone-prod-2.webp'
import Headphone2 from '../../Assets/products/headphone-prod-3.webp'
import { FaIndianRupeeSign } from "react-icons/fa6";

export default function PC_Nav() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  const items = [
    {
      key: '1',
      label: 'Headphone',
    },
    {
      key: '2',
      label: 'Earphones',
    },
    {
      key: '3',
      label: 'Smartwatch',
    },
    {
      key: '4',
      label: 'Speakers',
    }
  ];
  return (
    <>
      <div className=' text-center text-white bg-indigo-500 py-3'>
        <p>Last day to save | Fill your cart & start Shoping for as low as ₹399.</p>
      </div>
      <div className=' flex justify-between w-[90%] mx-auto p-3 items-center '>
        <div className="first">
          <ul className=' flex items-center'>
            <li className=' mx-10 text-gray-600 hover:text-gray-700 hover:font-semibold cursor-pointer '>About</li>
            <li className=' mx-10 text-gray-600 hover:text-gray-700 hover:font-semibold cursor-pointer '>Contact</li>
            <li className='mx-10 text-gray-600 hover:text-gray-700 hover:font-semibold cursor-pointer '>
              <Dropdown
                menu={{
                  items,
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <NavLink to='/main-menu'><Space>
                    Shop
                  </Space></NavLink>
                </a>
              </Dropdown>
            </li>
          </ul>
        </div>

        <div className="secound">
          <NavLink to='/'> <h1 className=' font-bold text-3xl text-indigo-400 flex items-center '>Shop<span className='text-indigo-600'>Kart
          </span><FaOpencart className=' mx-2' /></h1>
          </NavLink>  </div>

        <div className="third">
          <ul className=' flex items-center'>
            <li className=' mx-10 text-gray-600 hover:text-gray-700 hover:font-semibold cursor-pointer '>  <div className="search-container">
              <button className="search-button" onClick={toggleSearch}>
                <SearchOutlined />
              </button>
              <input
                type="text"
                className={`search-input ${isOpen ? "open" : ""}`}
                placeholder="Search..."
              />
            </div></li>
            <li className=' mx-10 text-gray-600 hover:text-gray-700 hover:font-semibold cursor-pointer ' onClick={showDrawer}><ShoppingCartOutlined /> <span className=' bg-blue-400 rounded-xl p-1 text-white font-bold '>+5</span></li>
            <li className=' mx-10 text-gray-600 hover:text-gray-700 hover:font-semibold cursor-pointer '>Login</li>
          </ul>
        </div>
      </div>

      <Drawer title="Cart Checkout" onClose={onClose} open={open}>
        <div className=' flex  justify-between flex-col  '>

          <div>
            <div className=' my-10'>
              <img className='w-[50px] h-[50px]' src={Headphone1} alt="img-error" />
              <div className=' flex items-center justify-between '>
                <h1>Name: Boat RockerZ</h1>
                <p className=' flex items-center'><FaIndianRupeeSign /> 1900</p>
              </div>
              <div className=' flex justify-end items-center '>
                <button className=' border-2 p-1'>+</button>
                <p className=' p-1'>0</p>
                <button className=' border-2 p-1'>-</button>
              </div>
            </div>

            <hr />
            <div className=' my-10'>
              <img className='w-[50px] h-[50px]' src={Headphone2} alt="img-error" />
              <div className=' flex items-center justify-between '>
                <h1>Name: Boat RockerX</h1>
                <p className=' flex items-center'><FaIndianRupeeSign /> 2100</p>
              </div>

              <div className=' flex justify-end items-center '>
                <button className=' border-2 p-1'>+</button>
                <p className='p-1'>0</p>
                <button className=' border-2 p-1'>-</button>
              </div>
            </div>
          </div>

          <div className=' flex justify-between items-center'>
            <hr />
            <h1>Total</h1>
            <p className=' text-green-600 font-semibold '>2100</p>
          </div>
        </div>
      </Drawer>
    </>
  )
}
