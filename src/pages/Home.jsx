import React from 'react'
import Money from '../assets/images/money-pile.png'
import Slide from './Slide'
import Banner from '../assets/images/banner.png'
import { useTypewriter,Cursor} from 'react-simple-typewriter'
import Funds from '../assets/images/funds-icon.svg'
import Limiteds from '../assets/images/limiteds-icon.svg'
import { motion } from "framer-motion";
import TestimonialsSection from '../data/testimonials'

const Home = () => {

    const [typeEffect] = useTypewriter({
    words:["No hidden fees", "great customer service", "Zero risk"],
    loop:{},
    typeSpeed:40,
    deleteSpeed:40
  })

  return (
    <>  
      <div className='w-full h-[300px] px-5 md:px-[200px] mt-[100px] md:mt-[170px]'>
          <div className='w-full h-[107px] '>
            <p >Recently Sold</p>
              <div  className='cursor-grabbing'>
              <Slide />
              </div>
          </div>
           
              <div className='w-full h-[300px] md:h-[257px] rounded-lg relative overflow-hidden'>
                <img src={Banner} alt="" className='w-full h-full object-cover' />
                <div className='w-[567px] h-[179px] ml-5 relative bottom-[269px]'>
                      <div className='w-[330px] md:w-[533px] h-[72px]'>
                        <p className='text-2xl md:text-3xl text-white pt-10'>Hope <span className='text-purple-400 font-bold'>To get</span>your device fixed at affordable rate ?</p>
                      </div>
                      <div className='mt-20 md:mt-16 relative'>
                  <span className='text-2xl text-white'>
                    {typeEffect}
                  </span>
                  <div className="absolute left-0 top-10 mb-5">
                    <button className='w-[147px] h-[37px] flex items-center hover:bg-gray-300 text-black bg-white rounded-lg justify-center'>
                      Contact Us ow
                    </button>
                  </div>
                </div>
             </div>
       </div>
       </div>


        <div>
            <div className='grid gap-8 px-5 mt-[130px] md:grid-cols-2 w-full md:px-[200px] md:mt-[150px] lg-[200px]'>
            <div className='w-full bg-primary h-[165px] rounded flex flex-row items-center justify-around'>
            <div className='w-[313px] h-[105px] mt-6 ml-4'>
        <p className='font-semibold text-white'>Buy Funds</p>
        <p className='text-white'>Stocks:<span className='text-white font-bold text-xl'>R$ 426,799</span></p>
        <button className="w-[98px] h-[37px] flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg mt-3">
          Purchase
        </button>
       </div> 
       <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
        <img src={Funds} alt=""  className='w-[140px] h-[142px]'/>
       </motion.div>
                </div>
                 <div className='w-full bg-sec h-[165px] rounded flex flex-row items-center justify-around'>
                   <div className='w-[313px] h-[105px] mt-6 ml-4'>
                        <p className='font-semibold text-white'>Buy Limiteds</p>
                        <p className='text-white'>9 Limiteds in Stock</p>
                        <button className="w-[145px] h-[37px] flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg mt-3">
                        Buy Limiteds
                        </button>
                    </div> 
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <img src={Limiteds} alt=""  className='w-[140px] h-[142px]'/>
                      </motion.div>
                </div>
            </div>
        </div>
 <div className="w-full px-20 md:px-[200px] mt-5">
    <div className="container mx-auto text-center text-blue-300">
      <p className="md:inline-block text-gray-400">
        We are not affiliated with Roblox Corporation. All trademarks are owned by their respective owners, and are used here solely to reference specific products.
      </p>
    </div>
    
</div>
  <TestimonialsSection/>
    </>
    
  )
}

export default Home