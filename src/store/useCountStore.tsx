import { create } from "zustand";

interface CountState {
  count: number;
  increase: () => void;
  decrease: () => void;
  reset: () => void;
}

const useCountStore = create<CountState>((set) => ({
  count: 0, // 상태
  increase: () => set((state) => ({ count: state.count + 1 })), // 증가 함수
  decrease: () => set((state) => ({ count: state.count - 1 })), // 감소 함수
  reset: () => set({ count: 0 }), // 초기화
}));
export default useCountStore;
