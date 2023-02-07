import { StateCreator } from "zustand";
export interface SpeedSlice {
    speed: number;
    changeSpeed: (newSpeed:number)=>void;

}

export const createSpeedSlice: StateCreator<SpeedSlice> = (set) => ({
    speed:250,
    changeSpeed: async (newSpeed:number) => {
        set({ speed: newSpeed})
    }

})