import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string
}

const TextArea = ({label, ...rest}: Props) => {
    return (
        <div className='flex flex-col gap-2'>
            <label className='font-semibold text-sm' htmlFor={rest.id}>{label}</label>
            <textarea className='bg-transparent outline-teal-500 border border-white/30 p-2 rounded resize-none' {...rest} />
        </div>
    )
}

export default TextArea