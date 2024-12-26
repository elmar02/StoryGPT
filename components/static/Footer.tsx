import React from 'react'

const Footer = () => {
    return (
        <footer className='border-t border-slate-900 px-3 py-8 space-y-3'>
            <ul className='flex gap-3 justify-center font-semibold text-sm'>
                <li>Terms of Service</li>
                <li>Contact Us</li>
                <li>Our Blog</li>
            </ul>
            <p className='text-center text-sm font-bold text-teal-500'>Copyright © 2024 StoryGPT MMC</p>
        </footer>
    )
}

export default Footer