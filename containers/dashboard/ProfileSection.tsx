'use client'
import { signOut } from '@/libs/auth'
import Image from 'next/image'
import React from 'react'
import ProfilePhoto from '@/public/profile.webp'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Session } from '@/types/users'
interface Props {
    session: Session
}

const ProfileSection = ({ session }: Props) => {
    const router = useRouter()

    const handleLogout = async () => {
        await signOut()
        router.push('/')
    }
    return (
        <section id='profile' className='section-box section-sm'>
            <div className='flex flex-col sm:flex-row gap-y-3 justify-between items-center'>
                <div className='flex gap-3 items-center'>
                    <div className='relative size-[50px]'>
                        <Image fill className='object-cover object-center rounded-full' src={ProfilePhoto} alt='profile-photo' />
                    </div>
                    <div>
                        <h1 className='font-semibold'>{session.fullname}</h1>
                        <p className='text-slate-400'>{session.email}</p>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <Link href={'/dashboard/create'} className='inline-block p-2 rounded border text-teal-500 border-teal-500 hover:text-teal-400 hover:border-teal-400 transition-colors'>
                        New Story
                    </Link>
                    <Link href={'/dashboard/saves'} className='inline-block p-2 rounded border text-slate-500 border-slate-500 hover:text-slate-400 hover:border-slate-400 transition-colors'>
                        <FontAwesomeIcon icon={faBookmark}/>
                    </Link>
                    <button onClick={handleLogout} className='p-2 rounded border text-red-500 border-red-500 hover:text-red-400 hover:border-red-400 transition-colors'>
                        <FontAwesomeIcon icon={faRightFromBracket} />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default ProfileSection