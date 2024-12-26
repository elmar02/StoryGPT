import CreateStorySection from '@/containers/dashboard/CreateStorySection'
import { getSession } from '@/libs/auth'
import React from 'react'

export default async function StoryCreatePage() {
  const session = await getSession()
  return (
    <main className="pt-[74px] sm:pt-[121px]">
      <CreateStorySection session={session}/>
    </main>
  )
}
