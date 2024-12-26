import { GetStories } from '@/actions/story'
import Label from '@/components/common/Label'
import ProfileSection from '@/containers/dashboard/ProfileSection'
import StoriesSection from '@/containers/stories/StoriesSection'
import { getSession } from '@/libs/auth'
import React from 'react'

export default async function DashboardPage() {
  const session = await getSession()
  const stories = await GetStories(session?.id)
  return (
    <main className='pt-[74px] sm:pt-[121px]'>
      {
        session && <ProfileSection session={session} />
      }
      <Label className="text-center">Your Stories</Label>
      <StoriesSection stories={stories}/>
    </main>
  )
}
