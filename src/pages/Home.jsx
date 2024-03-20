import React from 'react'
import Money from '../assets/images/money-pile.png'
import Slide from './Slide'
import Banner from '../assets/images/banner.png'
import { useTypewriter,Cursor} from 'react-simple-typewriter'
import Laptop from '../assets/images/laptop.jpg'
import Sam from '../assets/images/sam.jpg'
import Apple from '../assets/images/apple.png'
import other from '../assets/images/other.png'
import Limiteds from '../assets/images/limiteds-icon.svg'
import { motion } from "framer-motion";
import TestimonialsSection from '../data/testimonials'
import Repairs from './Repairs'

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
            <p >Recently Traded</p>
              <div  className='cursor-grabbing'>
              <Slide />
              </div>
          </div>
           
              <div className='w-full h-[300px] md:h-[257px] rounded-lg relative overflow-hidden'>
                <img src={Banner} alt="" className='w-full h-full object-cover' />
                <div className='w-[567px] h-[179px] ml-5 relative bottom-[269px]'>
                      <div className='w-[330px] md:w-[533px] h-[72px]'>
                        <p className='text-2xl font-semibold md:text-3xl text-black pt-10'>Hope <span className='text-yellow-400 font-bold'>To get</span>your device fixed at affordable rate ?</p>
                      </div>
                      <div className='mt-20 md:mt-16 relative'>
                  <span className='text-2xl text-blue-700'>
                    {typeEffect}
                  </span>
                  <div className="absolute left-0 top-10 mb-5">
                    <button className='w-[147px] h-[37px] flex items-center hover:bg-gray-300 text-black bg-white rounded-lg justify-center'>
                      Contact Us
                    </button>
                  </div>
                </div>
             </div>
       </div>
       <div className='flex justify-center mt-10'>
        <p className='text-3xl font-semibold'>We Repair</p>
       </div>
       </div>
  
        <div>
            <div className='grid gap-8 px-5 mt-[130px] md:grid-cols-2 w-full md:px-[200px] md:mt-[150px] lg-[200px]'>
            <div className='w-full bg-primary h-[195px] rounded flex flex-row items-center justify-around'>
            <div className='w-[313px] h-[105px] mt-6 ml-4'>
        <p className='font-semibold text-white'>Need Samsung repair?</p>
        <p className='text-white'>Cracked screen?</p>
        <p className='text-white'>Battery Trouble?</p>
        <button className="w-[98px] h-[37px] flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg mt-3">
          Contact Us
        </button>
       </div> 
       <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
        <img src={Sam} alt=""  className='w-[140px] h-[142px] pr-5 rounded-full'/>
       </motion.div>
     </div>
                 <div className='w-full bg-sec h-[195px] rounded flex flex-row items-center justify-around'>
                   <div className='w-[313px] h-[105px] mt-6 ml-4'>
                        <p className='font-semibold text-white'>Need Laptops repair</p>
                        <p className='text-white'> Keyboard malfunction?</p>
                        <p className='text-white'> Battery draining fast?</p>
                        <button className="w-[145px] h-[37px] flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg mt-3">
                        Contact Us
                        </button>
                    </div> 
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <img src={Laptop} alt=""  className='w-[140px] h-[142px] rounded-full pr-5'/>
                      </motion.div>
                </div>

                <div className='w-full bg-blue-300  h-[195px] rounded flex flex-row items-center justify-around'>
                   <div className='w-[313px] h-[105px] mt-6 ml-4'>
                        <p className='font-semibold text-white'>Apple Device Acting Up?</p>
                        <p className='text-white'> MacBook not booting up?</p>
                        <p className='text-white'> iPad charging issues?</p>
                        <button className="w-[145px] h-[37px] flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg mt-3">
                        Contact Us
                        </button>
                    </div> 
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                        <img src={Apple} alt=""  className='w-[140px] h-[142px] rounded-full pr-5'/>
                      </motion.div>
                </div>


                <div className='w-full bg-gray-400 h-[195px] rounded flex flex-row items-center justify-around'>
                   <div className='w-[313px] h-[105px] mt-6 ml-4'>
                        <p className='font-semibold text-white'>Any other Brands</p>
                        <p className='text-white'>  Whether it's a Google Pixel etc</p>
                        <p className='text-white'> Quality Replacement Parts</p>
                        <button className="w-[145px] h-[37px] flex items-center justify-center bg-white hover:bg-gray-200 rounded-lg mt-3">
                        Contact Us
                        </button>
                    </div> 
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                        <img src={other} alt=""  className='w-[140px] h-[142px] rounded-full pr-5'/>
                      </motion.div>
                </div>
            </div>
            <p className='flex justify-center text-3xl font-bold mt-[100px] underline'>Find Out who we are</p>
        </div>
        <div>
          <Repairs/>
        </div>
        <div className='mt-10 mb-10'>
          <TestimonialsSection/>
        </div>
        <div className="w-full px-20 md:px-[200px] mt-5">
            <div className="container mx-auto text-center text-blue-300">
            <p className="md:inline-block text-gray-400">
            Fast and reliable repairs by experienced technicians at affordable prices, ensuring quality parts and service - contact us now for all your device repair needs
            </p>
          </div>
      
</div>
    
    </>
    
  )
}

export default Home