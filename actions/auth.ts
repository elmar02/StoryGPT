'use server'

import { Session } from "@/types/users"

export async function GetUser(email: string) {
    const response = await fetch(`http://localhost:3000/api/users/${email}`,{
        cache: 'no-store'
    })
    const result = await response.json()
    return result.user
}

export async function AddUser(session: Session) {
    const response = await fetch(`http://localhost:3000/api/users`, {
        method: 'POST',
        body: JSON.stringify({
            newUser: session
        })
    })

    const result = response.json()

    return result
}