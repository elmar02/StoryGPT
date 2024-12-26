'use server'

import { apiKey } from "@/libs/keys"
import { Session } from "@/types/users"

export async function GetUser(email: string) {
    const response = await fetch(`${apiKey}/users/${email}`,{
        cache: 'no-store'
    })
    const result = await response.json()
    return result.user
}

export async function AddUser(session: Session) {
    const response = await fetch(`${apiKey}/users`, {
        method: 'POST',
        body: JSON.stringify({
            newUser: session
        })
    })

    const result = response.json()

    return result
}