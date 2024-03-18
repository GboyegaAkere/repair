import React from 'react'
import Slide from './Slide'
import Funds from '../assets/images/funds-icon.svg'
import { RiMoneyCnyCircleFill } from "react-icons/ri";
import Buys from '../components/Buys';
import { GrBitcoin } from "react-icons/gr";

const Buy = () => {
  return (
    <div className='w-full px-5 md:px-[250px] md:mt-[200px] mt-[100px]'>
      <div className='w-full md:h-[600px] [h-850px] bg-gray-500 px-3 md:px-[160px] rounded-lg pt-10'>
        <div className='w-full'>
          <div className='flex flex-row items-center gap-1'>
            <p className='text-xl text-black font-semibold'>Buy Funds</p>
            <RiMoneyCnyCircleFill className='text-2xl'/>
          </div>
          <div className='flex flex-row items-center justify-between flex-shrink-0 mt-3'>
            <p className='text-xl text-gray-400'>Total Stock: <span className='text-green-300 font-semibold'>R$ 314,399</span> </p>
            <div className='flex flex-row items-center gap-3'>
              <p>Pay with:</p>
              <div className='flex flex-row items-center gap-2'>
                {/* <button className='w-[40px] h-[30px] rounded-lg border-2 border-black bg-white flex items-center justify-center'>
                  all
                </button> */}
                <button className='w-[95px] h-[30px]  border-2 border-black rounded-lg bg-white flex items-center justify-center'>
                  coinbase
                </button>
                {/* <button className='w-[50px] h-[30px] border-2 border-black rounded-lg bg-white flex items-center justify-center'>
                  card
                </button> */}
              </div>
            </div>
          </div>

         <div className='mt-5'> 
          <p>Select Seller</p>
          <div className='flex flex-row gap-5  justify-center mx-5'>
          <div className='w-[190px] h-[110px]  rounded-lg flex items-center gap-3 bg-gray-100 px-3 border-2 border-gray-200'>
             <div>
                <div className='flex flex-row items-center gap-1 text-sm'>
                <p>Stock:</p>
                <div className='w-[80px] h-[20px] rounded-sm flex items-center  text-sm justify-center bg-green-100'>
                  <p className='text-green-500'>R$ 1,161</p>
                </div>
                </div>
                <div className='flex flex-row items-center'>
                <p>Rate:</p>
                <div className='w-[113px] py-2 h-[20px] rounded-sm text-sm flex items-center justify-center bg-gray-200'>
                  <p className='text-blue-400'>$7.00 per 1,000</p>
                </div>
                </div>
                <div className='flex flex-row items-center'>
                <p className='text-sm'>Payment:</p>
                <GrBitcoin />
                </div>
              </div>
            </div>
            
            <div className='hidden  w-[190px] h-[110px]  rounded-lg md:flex items-center gap-3  bg-gray-100 px-3 border-2 border-gray-200'>
             <div>
                <div className='flex flex-row items-center gap-1 text-sm'>
                <p>Stock:</p>
                <div className='w-[80px] h-[20px] rounded-sm flex items-center  text-sm justify-center bg-green-100'>
                  <p className='text-green-500'>R$ 1,161</p>
                </div>
                </div>
                <div className='flex flex-row items-center'>
                <p>Rate:</p>
                <div className='w-[113px] py-2 h-[20px] rounded-sm text-sm flex items-center justify-center bg-gray-200'>
                  <p className='text-blue-400'>$7.00 per 1,000</p>
                </div>
                </div>
                <div className='flex flex-row items-center'>
                <p className='text-sm'>Payment:</p>
                <GrBitcoin />
                </div>
              </div>
            </div>

            <div className='hidden  w-[190px] h-[110px]  rounded-lg md:flex items-center gap-3 px-3 bg-gray-100 border-2 border-gray-200'>
             <div>
                <div className='flex flex-row items-center gap-1 text-sm'>
                <p>Stock:</p>
                <div className='w-[80px] h-[20px] rounded-sm flex items-center  text-sm justify-center bg-green-100'>
                  <p className='text-green-500'>R$ 1,161</p>
                </div>
                </div>
                <div className='flex flex-row items-center'>
                <p>Rate:</p>
                <div className='w-[113px] py-2 h-[20px] rounded-sm text-sm flex items-center justify-center bg-gray-200'>
                  <p className='text-blue-400'>$7.00 per 1,000</p>
                </div>
                </div>
                <div className='flex flex-row items-center'>
                <p className='text-sm'>Payment:</p>
                <GrBitcoin />
                </div>
              </div>
            </div>
         </div> 
            <div className='mt-5'>
              <p>R$ Amount</p>
              <div className='w-full mx-auto'>
                <input type="text" name="" id="" className='w-full border-2 h-10 hover:border-gray-200 border-gray-300 rounded-lg' />
              </div>
            </div>

            <div className='mt-3'>
              <div className='flex flex-row items-center'>
               <p>Cost:</p>
               <span className='w-[90px] py-2 h-[20px] rounded-sm text-sm flex items-center justify-center bg-blue-900 text-white'>$7.00 USD</span>
              </div>

              <div className='flex flex-row items-center'>
               <p>Set your gamepass price:</p>
               <span className='w-[90px] py-2 h-[20px] rounded-sm text-sm flex items-center justify-center bg-green-300 text-white'>R$ 1,429</span>
              </div>
              
            </div>

            <div className='mt-5'>
              <p>Gamepass URL  How to get Gamepass URL?</p>
              <div className='w-full mx-auto'>
                <input type="text" placeholder='http://localhost:5173/buy' name="" id="" className='w-full px-5 border-2 h-10 hover:border-gray-200 border-gray-300 rounded-lg' />
              </div>
            </div>

            <div>
              <button className="w-[150px] h-[37px] flex items-center justify-center bg-blue-900 text-white rounded-lg mt-3">
                Buy with Balance
              </button>
              <p className='text-blue-400 text-sm mt-2'>Currently, we only accept cryptocurrency payments through Coinbase</p>
            </div>
       </div>
      </div>
      </div>
    </div>
  )
}

export default Buy