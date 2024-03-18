import React from 'react'
import { limiteds } from '../data/limiteds'
import { TiTag } from "react-icons/ti";
import { IoLogoBitcoin } from "react-icons/io";
import { GiFire } from "react-icons/gi";
import { PiCurrencyDollar } from "react-icons/pi";
import LimitedCards from '../components/LimitedCards';

const Limiteds = () => {
  return (
    <div className='md:mt-[200px] mt-[100px] w-full'>
      <div>
        <div className='w-full flex md:flex-row flex-col gap-5 justify-center items-center md:justify-between px-20 md:px-[200px]'>
           <input type="text" placeholder='Search Limited' name="" id="" className='w-[300px] md:w-[600px] px-5 border-2 h-10 hover:border-gray-200 border-gray-300 rounded-lg flex flex-shrink-0' />
            <div className='flex flex-row items-center gap-2'>
                <p>Payment Method:</p>
                <button className='w-[85px] h-[30px]  border-2 border-black rounded-lg bg-white flex items-center justify-center'>
                  Crypto
                </button>
              </div>
        </div>
      </div>
      <LimitedCards/>
    </div>
  )
}

export default Limiteds