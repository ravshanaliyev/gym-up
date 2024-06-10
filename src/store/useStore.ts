import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";




export const useStore = create<any>(
    persist(
        (set) => ({
            UserData: null,
            isRegister: false,

            setRegisteredUser: (user: any) => set(() => ({
                UserData: user,
                isRegister: true
            })),

        }),
        {
            name: 'user',
            storage: createJSONStorage(() => localStorage)
        }
    ),
)

