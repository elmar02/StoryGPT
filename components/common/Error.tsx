import React from 'react'

const Error = ({message}: {message: string|null}) => {
  return (
    message && <p className='text-red-500'>{message}</p>
  )
}

export default Error