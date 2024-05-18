import React from 'react'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import {arrowRight} from '../assets/icons'
import { shoes,statistics } from '../constants'
import { bigShoe1 } from '../assets/images'


const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = React.useState(bigShoe1);


  return (
    <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex  flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red '>Our Summer Collection</p> 
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br/>
          <span className='text-coral-red inline-block mt-3 mr-4'>Puma</span>
           Shoes
        </h1>
        <p className='font-montserrat text-lg text-slate-gray leading-8 mt-6 mb-14 sm:max-w-sm'>Discover stylish Puma arrivals, quality comfort, and innovation for your active life.</p>
        <Button label='Shop Now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-16 gap-16'>
          {statistics.map((item,index) => (
            <div key={item.label} className='flex flex-col justify-center items-center gap-2'>
              <h2 className='text-4xl font-palanquin font-bold'>{item.value}</h2>
              <p className='font-montserrat text-slate-gray'>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center '>
          <img  src = {bigShoeImg} alt='big shoe' width={610} height={500} className='object-contain relative z-10 pb-[10%]' />
          <div className='flex sm:gap-6 gap-4 absolute -bottom-[10%] sm:left-[10%] max-sm:px-6 z-10'> 
            {shoes.map((shoe)=>(
              <div key={shoe}>
                <ShoeCard 
                  imgURL = {shoe}
                  changeBigShoeImage=
                  {(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg = {bigShoeImg}
                  
                />
                </div>
            )
            )}
          </div>

      </div>
    </section>
  )
}

export default Hero