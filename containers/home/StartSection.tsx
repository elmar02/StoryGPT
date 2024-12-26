import Label from '@/components/common/Label'
import PlanTable from '@/components/plan/PlanTable'
import React from 'react'
const StartSection = () => {
    return (
        <section id='start' className='section-box space-y-8'>
            <Label className='text-center'>Choose a Plan and begin your adventure</Label>
            <PlanTable/>
        </section>
    )
}

export default StartSection