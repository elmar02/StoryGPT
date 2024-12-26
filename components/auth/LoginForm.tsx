'use client'
import React, { FormEvent, useState } from 'react'
import Input from '../common/Input'
import { signIn } from '@/libs/auth'
import { useRouter } from 'next/navigation'
import Error from '../common/Error'

const LoginForm = () => {
  const [error, setError] = useState<string|null>(null)
  const router = useRouter()
  const [pending, setPending] = useState(false)
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    setPending(prev=>!prev)
    const result = await signIn({
      email: formData.get('email') as string | '',
      password: formData.get('password') as string | ''
    })
    setPending(prev=>!prev)
    if(!result) setError('Email or password incorrect')
    else router.push('/dashboard')
  }
  return (
    <form onSubmit={handleSubmit} className='space-y-5'>
      <Input required label="Email" type="email" name="email" id="email" />
      <Input required label="Password" type="password" name="password" id="password" />
      <Error message={error}/>
      <button disabled={pending} className='w-full p-3 bg-teal-500 text-slate-950 rounded font-semibold'>Sign In</button>
    </form>
  )
}

export default LoginForm