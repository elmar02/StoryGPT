import { Story } from "@/types/story"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StateType{
    saves: number[]
}

const initialState: StateType = {
    saves: []
}

const saveSlice = createSlice({
    name: "save",
    initialState: initialState,
    reducers: {
        toggleSave: (state: StateType, actions: PayloadAction<number>) =>{
            const storyId = actions.payload
            if(state.saves.includes(storyId)){
                state.saves = [...state.saves.filter((id)=>id!==storyId)]
            }
            else state.saves = [storyId, ...state.saves]
        },
        setSaves: (state: StateType, actions: PayloadAction<number[]>) =>{
            state.saves = actions.payload
        }
    }
})


export const {toggleSave, setSaves} = saveSlice.actions
export default saveSlice.reducer