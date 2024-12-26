import { faPenNib } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link';
import React, { ReactNode } from 'react'

const PlanTable = () => {
    const rows = [
        {
            feature: "Price",
            free: "$0 / Month",
            pro: "$9.99 / Month",
            ultimate: "$19.99 / Month",
        },
        {
            feature: "Story Limit",
            free: "Up to 5 stories per month",
            pro: "Unlimited",
            ultimate: "Unlimited",
        },
        {
            feature: "Text-to-Speech",
            free: "Limited",
            pro: "Full access with premium voices",
            ultimate: "Full access with premium voices",
        },
        {
            feature: "Save Stories",
            free: "Save up to 3 stories",
            pro: "Unlimited",
            ultimate: "Unlimited",
        },
        {
            feature: "",
            free: <GetStartedLink />,
            pro: <GetStartedLink />,
            ultimate: <GetStartedLink />,
            last: true
        }
    ];
    return (
        <div className='overflow-x-auto'>
            <table className='w-full'>
                <thead>
                    <tr className='divide-x text-xl'>
                        <th className='px-2 text-teal-500 border-white/10 py-8 align-middle text-center border-b'>
                            <FontAwesomeIcon icon={faPenNib} />
                        </th>
                        <th className='px-2 text-teal-500 border-white/10 py-8 align-middle text-center bg-[#d9ffe11f] border-b'>Free</th>
                        <th className='px-2 text-teal-500 border-white/10 py-8 align-middle text-center bg-[#ec56a71f] border-b'>$10/mo</th>
                        <th className='px-2 text-teal-500 border-white/10 py-8 align-middle text-center bg-[#9773ff1f] border-b'>$25/mo</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((row, index) => (
                            <PlanRow last={row.last} key={index} feature={row.feature} free={row.free} pro={row.pro} ultimate={row.ultimate} />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

interface RowProps {
    feature: ReactNode,
    free: ReactNode,
    pro: ReactNode,
    ultimate: ReactNode,
    last?: boolean
}

const PlanRow = ({ feature, free, pro, ultimate, last = false }: RowProps) => {
    return (
        <tr className='divide-x'>
            <td className={`px-2 w-fit border-white/10 py-8 align-middle text-center ${last ? 'border-t' : 'border-y'} font-bold text-teal-500`}>{feature}</td>
            <td className='px-2 w-fit border-white/10 bg-[#d9ffe11f] py-8 align-middle text-center border-y'>{free}</td>
            <td className='px-2 w-fit border-white/10 bg-[#ec56a71f] py-8 align-middle text-center border-y'>{pro}</td>
            <td className='px-2 w-fit border-white/10 bg-[#9773ff1f] py-8 align-middle text-center border-y'>{ultimate}</td>
        </tr>
    )
}

const GetStartedLink = () => {
    return (
        <Link href=' /dashboard/create' className='inline-block py-3 px-5 border bg-slate-950 border-teal-500'>Get Started</Link>
    )
}

export default PlanTable