import React, { useState } from 'react'
import { SearchOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';
import '../../Styles/NavBar.css'
import { Dropdown, Space } from 'antd';
import { NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import { Button, Drawer } from 'antd';

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
        
      </Drawer>
    </>
  )
}
