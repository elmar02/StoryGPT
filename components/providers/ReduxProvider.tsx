'use client'
import { setSaves } from '@/redux/slices/saveSlice'
import { AppStore, makeStore } from '@/redux/store'
import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'

interface Props {
    children: ReactNode,
    saves: number[]
}
const ReduxProvider = ({ children, saves }: Props) => {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(setSaves(saves))
    }

    return (
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    )
}

export default ReduxProvider