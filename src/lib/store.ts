import create from 'zustand'
import { createArraySlice, ArraySlice } from './slices/createArraySlice'
import { createSpeedSlice, SpeedSlice } from './slices/createSpeedSlice'
import { createIsProcessingSlice,IsProcessingSlice } from './slices/createIsProcessingSlice'

type StoreState = ArraySlice & SpeedSlice &IsProcessingSlice

export const useAppStore = create<StoreState>()((...a) => ({
    ...createArraySlice(...a),
    ...createSpeedSlice(...a),
    ...createIsProcessingSlice(...a),
}))