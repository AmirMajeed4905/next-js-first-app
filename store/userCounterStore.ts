import { create } from 'zustand'


// Pehle type define karo (TypeScript)
type CounterStore = {
  count: number          // yeh hai STATE
  increment: () => void  // yeh hai ACTION
  decrement: () => void
}


const useCounterStore = create<CounterStore>((set) => ({
  count: 0,

  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))



export default useCounterStore
