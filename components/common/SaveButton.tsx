'use client'
import React, { useState } from 'react'
import { faBookmark as faSave } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faSaved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store'
import { toggleSave } from '@/redux/slices/saveSlice'
import { updateSaves } from '@/libs/save'

const SaveButton = ({id}: {id: number}) => {
    const saves = useSelector((state: RootState)=> state.save.saves)
    const [saved, setSaved] = useState(saves.includes(id))
    const dispatch = useDispatch()
    const handleClick = () => {
        updateSaves([id, ...saves])
        setSaved(prev => !prev)
        dispatch(toggleSave(id))
    }
    return (
        <button onClick={handleClick} className='p-2 rounded border text-slate-500 border-slate-500 hover:text-slate-400 hover:border-slate-400 transition-colors'>
            <FontAwesomeIcon icon={saved ? faSaved : faSave} />
        </button>
    )
}

export default SaveButton