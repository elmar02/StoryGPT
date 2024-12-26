import { Roboto_Slab } from 'next/font/google'
import React, { ReactNode } from 'react'

const roboto_slab = Roboto_Slab({
    weight: '700',
    subsets: ['latin']
})

interface Props{
    children?: ReactNode
    className?: string
}

const Label = ({children, className = ''}: Props) => {
  return (
    <h1 className={`${roboto_slab.className} ${className} text-3xl leading-none mb-4 capitalize text-teal-500`}>
        {children}
    </h1>
  )
}

export default Label