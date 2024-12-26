import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement>{
    label?: string
}

const Input = ({label, ...rest}: Props) => {
    return (
        <div className='flex flex-col gap-2'>
            {label && <label className='font-semibold text-sm' htmlFor={rest.id}>{label}</label>}
            <input className='bg-transparent outline-teal-500 border border-white/30 p-2 rounded' {...rest} />
        </div>
    )
}

export default Input