'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Input from '../common/Input'
import { useRouter } from 'next/navigation'
import { Session } from '@/types/users'
import { AddUser } from '@/actions/auth'
import Error from '../common/Error'
import { encryptValue } from '@/libs/crypto'
import { authKey } from '@/libs/keys'

const RegisterForm = () => {
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    const formData = new FormData(e.currentTarget)
    if (formData.get('password') !== formData.get('confirm-password')) {
      setError("Passwords don't match")
      return
    }
    setPending(prev => !prev)
    const data = Object.fromEntries(formData.entries());
    try {
      const session: Session = {
        email: data.email as string ?? '',
        fullname: data.fullname as string ?? '',
        password: data.password as string ?? ''
      }
      const result = await AddUser(session)

      if (result.success) {
        router.push('/login')
      }
      else {
        setError(result.message)
      }
    } catch (error) {
      console.error(error);
      setError('failed to fetch')
    }
    finally {
      setPending(prev => !prev)
    }
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-5' autoComplete='off'>
      <Input required autoComplete='new-fullname' label='Full Name' type="text" name="fullname" id="fullname" />
      <Input required autoComplete='new-email' label='Email' type="email" name="email" id="email" />
      <Input required autoComplete='new-password' label='Password' type="password" name="password" id="password" />
      <Input required autoComplete='new-confirm-password' label='Confirm Password' type="password" name="confirm-password" id="confirm-password" />
      <Error message={error} />
      <button disabled={pending} className='w-full p-3 bg-teal-500 text-slate-950 rounded font-semibold'>Sign Up</button>
    </form>
  )
}

export default RegisterForm