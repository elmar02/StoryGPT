'use server'

import { cookies } from "next/headers"
import { decryptValue, encryptValue } from "./crypto"
import { cookieKey } from "./keys"
import { User } from "@/types/users"
import { GetUser } from "@/actions/auth"

export async function getSession() {
    const sessionCookie = cookies().get('session')
    if(sessionCookie){
        const decrypted = await decryptValue(sessionCookie.value, cookieKey)
        if(decrypted) return JSON.parse(decrypted) as User
    }
    return null
}

export async function signIn(session: {email: string, password: string}) {
    const user = await GetUser(session.email)    
    if(!user) return false
    if(user.password !== session.password) return false
    const encrypted = await encryptValue(JSON.stringify(user), cookieKey)
    if(encrypted) cookies().set('session', encrypted)
    return true
}

export async function signOut() {
    cookies().delete('session')
}