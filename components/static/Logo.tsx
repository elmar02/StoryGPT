import Image from 'next/image'
import React from 'react'
import LogoImage from '@/public/logo.svg'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href='/' className='logo relative size-[50px] sm:size-[65px] md:size-[80px]'>
        <Image src={LogoImage} alt='logo' fill/>
    </Link>
  )
}

export default Logo