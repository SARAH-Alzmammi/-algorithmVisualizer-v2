import { StateCreator } from "zustand";
export interface  IsProcessingSlice {
    isProcessing: boolean;
    toggleIsProcessing: ()=>void;

}

export const createIsProcessingSlice: StateCreator< IsProcessingSlice> = (set,get) => ({
    isProcessing:false,
    toggleIsProcessing: async () => {
        set({ isProcessing: !get().isProcessing})

    }

})