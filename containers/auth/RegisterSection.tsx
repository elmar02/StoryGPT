import RegisterForm from '@/components/auth/RegisterForm'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Roboto_Slab } from 'next/font/google'
import Link from 'next/link'
import React from 'react'

const roboto_slab = Roboto_Slab({
    weight: '700',
    subsets: ['latin']
})

const RegisterSection = () => {
    return (
        <div>
            <div className='flex justify-between items-center font-semibold'>
                <Link href={'/'} className={roboto_slab.className}><FontAwesomeIcon icon={faCaretLeft} /> Back</Link>
                <Link href={'/login'} className={`text-teal-500 ${roboto_slab.className}`}>Log In</Link>
            </div>
            <div className='sm:px-5 mt-6'>
                <h4 className='font-semibold text-teal-500'>Register</h4>
                <h1 className={`${roboto_slab.className} text-xl mb-3`}>Get Started</h1>
                <RegisterForm />
            </div>
        </div>
    )
}

export default RegisterSection