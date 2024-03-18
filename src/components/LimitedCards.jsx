import React from 'react'
import { limiteds } from '../data/limiteds'
import { TiTag } from "react-icons/ti";
import { IoLogoBitcoin } from "react-icons/io";
import { GiFire } from "react-icons/gi";
import { PiCurrencyDollar } from "react-icons/pi";
import { motion } from 'framer-motion';


const LimitedCards = () => {
  return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 px-5 md:px-[150px] gap-4 mt-5">
            {limiteds.map((limited)=>{
              return(
                <div key={limited.id} className="bg-white shadow-xl p-2 md:p-4 relative rounded-lg">
                <div className="absolute top-2 left-3">
                  <IoLogoBitcoin/>
                </div>
                <div className="absolute top-2 right-3 text-yellow-500">
                  <GiFire/>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }} 
                  transition={{ duration: 0.3 }} ><img src={limited.image} alt="Placeholder" className="mx-auto" style={{ maxWidth: '90%', height: 'auto' }} />
                </motion.div>
                
                <div className="text-center ml-3 mt-2 md:mt-4">
                  <button className="w-[120px] h-[25px] flex items-center justify-center bg-green-100 rounded-sm">
                    <span className='flex flex-row items-center gap-1 text-green-500'>RAP <TiTag className='text-sm h-3 w-3' />{limited.amount}</span>
                  </button>
                  <button className="w-[120px] h-[25px] flex items-center justify-center bg-blue-900 text-white rounded-sm mt-1">
                    <span className='flex flex-row items-center gap-1'>
                      <PiCurrencyDollar className='text-sm' />
                      {limited.price}
                    </span> 
                  </button>
                  <h2 className="text-sm md:text-lg  text-gray-400  mt-2 md:mt-4">{limited.description}</h2>
                </div>
              </div>              
              )
            })}
          </div>
  )
}

export default LimitedCards

