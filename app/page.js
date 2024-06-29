import Image from 'next/image'
import React from 'react'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className='text-black'>
      <div className='relative'>
        <img src="/p1.png" alt="logo" className='z-0 w-[1920px] h-[830px]' />
        <div className='w-[1899px] h-[830px] z-10 absolute top-0 left-0 bg-[#004171] opacity-40'></div>
        <Image src="/t1.png" alt="logo" width={960} height={200} className='absolute top-60 left-[480px] z-20' />
        <Image src="/t2.png" alt="logo" width={600} height={200} className='absolute top-[430px] left-[650px] z-20' />
      </div>
    <Image src="/sl3.png" alt="logo" width={1920} height={1080} />
    <Image src="/sl4.png" alt="logo" width={1920} height={1080} />
    <Footer/>
    
    </div>
  )
}
