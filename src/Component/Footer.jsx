import React from 'react'
import payments from '../Assets/payments.png'

export default function Footer() {
  
    return (
        <>
            <div className="  footer_main bg-gray-100 flex flex-col justify-between ">
                <div className=' py-10 w-[80%] mx-auto '>
                    <div className=' py-5 text-left '>
                        <ul className='flex items-center justify-around text-left'>
                            <li className=' font-semibold '>ABOUT</li>
                            <li className=' font-semibold '>CONTACT</li>
                            <li className=' font-semibold '>CATGORIES</li>
                            <li className=' font-semibold '>PAGES</li>
                        </ul>
                    </div>

                    <div className=' flex justify-around  '>
                        <div className=' flex-1 ml-10'>
                            <p className=' text-xs '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit pariatur tempore dicta? Tempore, ratione? Quo ex nesciunt magnam qui, nulla iste sit ut accusamus! Placeat voluptatibus nobis numquam architecto.
                            </p>
                        </div>

                        <div className=' flex-1 ml-10'>
                            <ul>
                                <li className='text-xs'>Subhojeet567@gmail.com</li>
                                <li className='text-xs'>+91 7903942889</li>
                                <li className='text-xs'>Wagholi, Pune, Maharastra, India</li>
                            </ul>
                        </div>

                        <div className=' flex-1 ml-10'>

                            <ul>
                                <li className='text-xs'>Headphone</li>
                                <li className='text-xs'>Earbuds</li>
                                <li className='text-xs'>Smartwatches</li>
                                <li className='text-xs'>Speakers</li>
                                <li className='text-xs'>More...</li>
                            </ul>
                        </div>

                        <div className=' flex-1 ml-10'>
                            <ul>
                                <li className='text-xs'>Home</li>
                                <li className='text-xs'>About</li>
                                <li className='text-xs'>Shop</li>
                                <li className='text-xs'>Contact</li>
                                <li className='text-xs'>Term & Condition</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=' flex justify-between items-center w-[80%] mx-auto pb-5'>
                    <p className=' text-xs pl-9 text-gray-600 '>This Site is create by subhojeet567@gmail.com contact to make such sites</p>
                    <div>
                        <img src={payments} alt="img-error" />
                    </div>
                </div>
            </div>
        </>
    )
}
