'use client'
import React, { useState } from 'react'
import { faBookmark as faSave } from '@fortawesome/free-regular-svg-icons'
import { faBookmark as faSaved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const SaveButton = () => {
    const [saved, setSaved] = useState(false)

    const toggleSave = () => {
        setSaved(prev => !prev)
    }
    return (
        <button onClick={toggleSave} className='p-2 rounded border text-slate-500 border-slate-500 hover:text-slate-400 hover:border-slate-400 transition-colors'>
            <FontAwesomeIcon icon={saved ? faSaved : faSave} />
        </button>
    )
}

export default SaveButton