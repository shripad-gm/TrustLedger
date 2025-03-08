'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'

function HeroSection() {
        const imageRef=useRef();

        useEffect(() => {
            const imageElemet=imageRef.current;
            const handleScroll=()=>{
                const scrollposition=window.scrollY;
                const scrollthreshold=100;
                if(scrollposition>scrollthreshold){
                    imageElemet.classList.add("scrolled");

                }
                else{
                    imageElemet.classList.remove("scrolled");
                }
            }
            window.addEventListener('scroll', handleScroll);
            return ()=>{
                window.removeEventListener('scroll',handleScroll);
            }
        }, [])

  return (
    <div className='pb-20 px-4'>
      <div className='mx-auto text-center container'>
        <h1 className='text-4xl md:text-8xl lg:text-[107px] pb-6 bg-gradient-to-br
         from-blue-600 to-purple-600 bg-clip-text text-transparent 
          pr-2 font-extrabold'>Manage Your Finance <br/>with Intelligence</h1>
        <p className='text-xl max-w-2xl mx-auto text-gray-600 pb-2'>
            An ai powered financial management platform that helps you track, analyse and optimise your spending with real time insights
        </p>
      </div>
      <div className='flex justify-center space-x-2 pt-3'>
        <Link href='/dashboard'>
            <Button className="px-8" size="lg">Get Started</Button>
        </Link>

        <Link href='/demo'>
            <Button className="px-8" size="lg" variant={'outline'}>watch demo</Button>
        </Link>
      </div>
      <div className="hero-image-wrapper mt-5 md:mt-0">
        <div ref={imageRef} className="hero-image">
            <Image src="/banner.jpeg" alt="dashboard preview" width={1280} height={720}
            className="rounded-lg mx-auto shadow-2xl border"
            priority/>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
