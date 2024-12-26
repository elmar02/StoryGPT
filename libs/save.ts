'use server'
import { cookies } from "next/headers";
import { decryptValue, encryptValue } from "./crypto";
import { cookieKey } from "./keys";

export async function updateSaves(saves: number[]) {
    const encryptedState = await encryptValue(JSON.stringify({saves}), cookieKey)
    if (encryptedState) cookies().set('saves', encryptedState)
}

export async function getSaves(){
    const encryptedState = cookies().get('saves')?.value
    if(!encryptedState) return []
    const decryptedState = await decryptValue(encryptedState, cookieKey)
    if(!decryptedState) return []
    return JSON.parse(decryptedState).saves as number[]
}