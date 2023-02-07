import { StateCreator } from "zustand";
export interface ArraySlice {
    array: number[];
    size: number;
    generateNewArray: ()=>void;
    changeSize: (newSize:number)=>void;
    setArray: (newArray:number[])=>void;
}

export const createArraySlice: StateCreator<ArraySlice> = (set,get) => ({

    array: [50, 40, 100, 30, 10],
    size: 5,
    generateNewArray: async () => {
        let arr = []
        for(let i = 0; i < get().size; i++) {
            let newNumber = Math.floor(Math.random() * 100+1);
            arr.push(newNumber)
        }
        set({ array: arr})
    },

    changeSize: async (newSize:number) => {
        set({ size: newSize})
        get().generateNewArray();
    },
    setArray: async (newArray:number[]) => {
        set({ array: newArray})
    },
})