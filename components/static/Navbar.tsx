'use client'
import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { scrollToSection } from '@/libs/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ProfilePhoto from '@/public/profile.webp'
import { Session } from '@/types/users'

interface Props{
    session: Session|null
}

const Navbar = ({session}: Props) => {
    const pathname = usePathname()
    return (
        <nav className='py-1 sm:py-5 absolute z-[900] w-full'>
            <div className='box-container flex items-center justify-between'>
                <Logo />
                <ul className='font-semibold items-center flex gap-5 text-teal-500'>
                    {
                        pathname === '/' && <>
                            <li className='hidden sm:block'>
                                <button className='hover:text-teal-500 transition-colors' onClick={() => scrollToSection('about')}>About</button>
                            </li>
                            <li className='hidden sm:block'>
                                <button className='hover:text-teal-500 transition-colors' onClick={() => scrollToSection('start')}>Pricing</button>
                            </li>
                            <li className='hidden sm:block'>
                                <button className='hover:text-teal-500 transition-colors' onClick={() => scrollToSection('stories')}>Stories</button>
                            </li>
                        </>
                    }
                    <li>
                        {
                            !session? <Link className='bg-teal-500 transition-colors hover:bg-teal-400 py-2 px-5 rounded text-slate-950 text-sm' href='/login'>Login</Link>
                            :<Link href={'/dashboard'} className='relative size-[35px] sm:size-[45px] inline-block'>
                                <Image fill className='object-cover object-center rounded-full' src={ProfilePhoto} alt='profile-photo' />
                            </Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar