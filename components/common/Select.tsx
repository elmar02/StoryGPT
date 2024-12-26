import React, { ReactNode, SelectHTMLAttributes } from 'react'

interface Props extends SelectHTMLAttributes<HTMLSelectElement>{
    label?: string
}

const Select = ({label, ...rest}: Props) => {
    return (
        <div className='flex flex-col gap-1'>
            {label && <label className='font-semibold text-sm' htmlFor={rest.id}>{label}</label>}
            <select className='bg-transparent outline-teal-500 border border-white/30 p-2 rounded' {...rest} />
        </div>
    )
}

interface OptionProps{
    value: string | number | readonly string[] | undefined,
    children: ReactNode
}

const Option = ({value, children}: OptionProps)=>{
    return(
        <option className='bg-slate-950 checked:text-slate-950 checked:bg-teal-500' value={value}>{children}</option>
    )
}

export {Option}

export default Select