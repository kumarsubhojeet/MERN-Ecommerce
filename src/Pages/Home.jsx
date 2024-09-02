import React, { useState, useEffect } from 'react'
import Navbar from '../Component/Navbar/Nav_Main'
import '../Styles/Home.css'
import { DoubleRightOutlined } from '@ant-design/icons';
import axios from 'axios';
import { CgDollar } from "react-icons/cg";
import Slider from "react-slick";
import { Image, Input, Button } from 'antd';
import Banner_img from '../Assets/banner-img.png'
import { GoStarFill } from "react-icons/go";
import { FaRupeeSign } from "react-icons/fa";

import Warranty_icon from '../Assets/Warrenty/warranty.png'
import delivery_icon from '../Assets/Warrenty/fast-delivery.png'
import bill_icon from '../Assets/Warrenty/bill.png'
import exchange from '../Assets/Warrenty/exchange.png'

import Headphones from '../Assets/products/blue_headphones.png'
import Earphones from '../Assets/products/earbuds-prod-1.webp'
import watch from '../Assets/products/watch-prod-2.webp'
import speakers from '../Assets/products/speaker-prod-3.webp'
import camera from '../Assets/products/camera01.png'
import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import Footer from '../Component/Footer.jsx';

import { HDAta, Earbuds, smartWatch } from "../Data/Product.js"

const Home = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };


  return (
    <div className='Home_main h-[100vh] '>
      <Navbar />

      <div className=' w-[90%] mx-auto py-5 px-10'>

        {/* Top banner */}

        <div className=' flex justify-between items-center '>
          <div className="left">
            <img src={Banner_img} className=' h-[75vh] ' alt="img-error" />
          </div>
          <div className="right text-right ">
            <h2 className=' text-red-500 font-semibold text-xl flex justify-end items-center '> <GoStarFill className=' mx-2 text-2xl' /> Top Product of this Month</h2>
            <h1 className='banner_Text text-5xl font-semibold '>Boat <br /> HeadPhone</h1>
            <p className=' text-gray-700 text-md py-2 '>Wireless Earphone with 40H Playback, ASAP™ Charge, BEAST™ Mode, ENx™ Technology</p>

            <div className=' my-5'>
              <button class="grab_Now-1" role="button">
                <span class="grab_Now-1-shadow"></span>
                <span class="grab_Now-1-edge"></span>
                <span class="grab_Now-1-front text">
                  Grab Now
                </span>
              </button>
            </div>
          </div>
        </div>


        {/* warrenty section */}
        <div className='warrenty_section flex justify-between  w-[80%] mx-auto my-20'>
          <div className=' flex items-center flex-col '>
            <img src={Warranty_icon} alt="image-error" className=' w-[100px] h-[100px] ' />
            <p className=' mt-3 '>1 year Warranty</p>
          </div>
          <div className=' flex items-center flex-col '>
            <img src={delivery_icon} alt="image-error" className=' w-[100px] h-[100px] ' />
            <p className=' mt-3 '>Express Delivery</p>
          </div>

          <div className=' flex items-center flex-col '>
            <img src={bill_icon} alt="image-error" className=' w-[100px] h-[100px] ' />
            <p className=' mt-3 '>GST Bill</p>
          </div>

          <div className=' flex items-center flex-col '>
            <img src={exchange} alt="image-error" className=' w-[100px] h-[100px] ' />
            <p className=' mt-3 '>14 days Replacement</p>
          </div>
        </div>


        {/* Best Sellers */}
        <div className=' my-10'>
          <h1 className='text-3xl font-bold mb-5 '><span className=' text-indigo-700'>Explore</span> Bestsellers</h1>
          <div className=' flex justify-between items-center '>
            <section className='BS_Section Headphone mx-5 bg-red-600  '>
              <img src={watch} alt="img-error" />
            </section>

            <section className='BS_Section Earphones mx-5 bg-yellow-400 '>
              <img src={speakers} alt="img-error" />
            </section>

            <section className='BS_Section Speakers  mx-5 bg-blue-400 '>
              <img src={Earphones} alt="img-error" />
            </section>

            <section className='BS_Section smartwatches  mx-5 bg-violet-600 '>
              <img src={Headphones} alt="img-error" />
            </section>

            <section className='BS_Section smartwatches  mx-5 bg-[#d8d7d7] '>
              <img src={camera} alt="img-error" />
            </section>
          </div>
        </div>

        {/* Headphones */}
        <div className='new-arivals-home py-5 '>
          <h1 className='text-3xl font-bold mb-5 '><span className=' text-indigo-700'>Explore</span> Headphones </h1>


          <div className="">
            <ul className="slider-container">
              <Slider {...settings}>
                {
                  HDAta.map((item) => (
                    <div className=' py-[3rem] ' key={item.id}>
                      <li className='mx-5'>
                        <div className="card border-0">
                          <div className="ratio ratio-1x1 ">
                            <Image style={{ width: '300px', height: '350px' }} src={item.img} className="image_card p-10 rounded-xl w-[300px] h-[350px] bg-cover " loading="lazy" alt="..." />
                          </div>
                          <div className="card-body p-0 pt-2">
                            <div className="d-flex">
                              <h3 className="flex-grow-1 h5 text-gray-600 font-semibold ">{item.Name}</h3>
                              <p className=" text-gray-600 flex items-center "><FaRupeeSign className=' text-green-600 font-semibold ' /> {item.price}</p>
                            </div>
                            <p className="card-text text-gray-600 ">{item.category}</p>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))
                }
              </Slider>
            </ul>

          </div>

        </div>


        {/* Earphones */}
        <div className='new-arivals-home py-5 '>
          <h1 className=' text-right text-3xl font-bold mb-5 '><span className=' text-indigo-700'>Explore</span> Earbuds </h1>

          <div className="">
            <ul className="slider-container">
              <Slider {...settings}>
                {
                  Earbuds.map((item) => (
                    <div className=' py-[3rem] ' key={item.id}>
                      <li className='mx-5'>
                        <div className="card border-0">
                          <div className="ratio ratio-1x1 ">
                            <Image style={{ width: '300px', height: '350px' }} src={item.img} className="image_card p-10 rounded-xl w-[300px] h-[350px] bg-cover " loading="lazy" alt="..." />
                          </div>
                          <div className="card-body p-0 pt-2">
                            <div className="d-flex">
                              <h3 className="flex-grow-1 h5 text-gray-600 font-semibold ">{item.Name}</h3>
                              <p className=" text-gray-600 flex items-center "><FaRupeeSign className=' text-green-600 font-semibold ' /> {item.price}</p>
                            </div>
                            <p className="card-text text-gray-600 ">{item.category}</p>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))
                }
              </Slider>
            </ul>

          </div>
        </div>

        <div className='new-arivals-home py-5 '>
          <h1 className=' text-left text-3xl font-bold mb-5 '><span className=' text-indigo-700'>Explore</span> watch </h1>

          {/* Watch  */}
          <div className="">
            <ul className="slider-container">
              <Slider {...settings}>
                {
                  smartWatch.map((item) => (
                    <div className=' py-[3rem] ' key={item.id}>
                      <li className='mx-5'>
                        <div className="card border-0">
                          <div className="ratio ratio-1x1 ">
                            <Image style={{ width: '300px', height: '350px' }} src={item.img} className="image_card p-10 rounded-xl w-[300px] h-[350px] bg-cover " loading="lazy" alt="..." />
                          </div>
                          <div className="card-body p-0 pt-2">
                            <div className="d-flex">
                              <h3 className="flex-grow-1 h5 text-gray-600 font-semibold ">{item.Name}</h3>
                              <p className=" text-gray-600 flex items-center "><FaRupeeSign className=' text-green-600 font-semibold ' /> {item.price}</p>
                            </div>
                            <p className="card-text text-gray-600 ">{item.category}</p>
                          </div>
                        </div>
                      </li>
                    </div>
                  ))
                }
              </Slider>
            </ul>


          </div>
        </div>

      </div>

      <div className=' text-center my-5 '>
        <button class="grab_Now-1" role="button">
          <span class="grab_Now-1-shadow"></span>
          <span class="grab_Now-1-edge"></span>
          <span class="grab_Now-1-front text">
            View All Products
          </span>
        </button>
      </div>

      <div className="newsletter flex-col h-[50vh] flex items-center text-center justify-center ">
        <p className='text-gray-500'>Newsletter</p>
        <h1 className='text-2xl font-semibold'>SIGNUP FOR LATEST UPDATES AND OFFERS</h1>

        <div className=' flex items-center '>
          <Input placeholder="Enter Email...." />
          <Button type="primary" className=' mx-2 my-5' >Suscribe</Button>
        </div>

        <p className='text-gray-500'>Find Us On Social Media</p>

        <div className=' flex items-center mt-4'>
          <FaFacebook className='social_media text-3xl mx-5 ' />
          <AiFillInstagram className='social_media text-3xl mx-5 ' />
          <FaSquareXTwitter className='social_media text-3xl mx-5 ' />
          <FaLinkedin className='social_media text-3xl mx-5 ' />
        </div>

      </div>

      <Footer />
    </div>

  )
}

export default Home