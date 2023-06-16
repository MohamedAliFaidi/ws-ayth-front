import { create } from "zustand";
import { persist } from "zustand/middleware";



const useUserStore = create()(
  persist(
    (set) => ({
      userId: "",
      
      email: "",

      setUserId: (ch) => set((state) => ({ userId: ch })),
      setEmail: (ch) => set((state) => ({ email: ch })),
     
    }),
    {
      name: "userStore",
    }
  )
);

export { useUserStore };